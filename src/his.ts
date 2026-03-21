type FocusSample = [elapsed: number, tabIndex: number, tagCode: number, hasInteraction: number];

type PointerSample = [x: number, y: number, t: number];

type ScrollSample = [y: number, t: number];

type TouchSample = [
	x: number,
	y: number,
	t: number,
	pressure: number,
	radiusX: number,
	radiusY: number
];

export interface CollectorOptions {
	maxSamples?: number;
	sampleInterval?: number;
	target?: Window;
}

export class Collector {
	readonly TAG_CODES: Record<string, number> = {
		INPUT: 1,
		TEXTAREA: 2,
		SELECT: 3,
		BUTTON: 4,
		A: 5,
		DETAILS: 6,
		SUMMARY: 7,
		IFRAME: 8,
		VIDEO: 9,
		AUDIO: 10
	};

	readonly maxSamples: number;

	readonly sampleInterval: number;

	readonly target: Window;

	private focusStartTime = 0;

	private focusInteraction = 0;

	private focusInteractionTimer: ReturnType<typeof setTimeout> | null = null;

	private lastPointerSample = 0;

	private lastTouchSample = 0;

	private lastScrollSample = 0;

	private pendingPointer: PointerSample | null = null;

	private pendingTouch: TouchSample | null = null;

	private focus: FocusSample[] = [];

	private pointer: PointerSample[] = [];

	private scroll: ScrollSample[] = [];

	private touch: TouchSample[] = [];

	constructor(options: CollectorOptions = {}) {
		const { maxSamples = 60, sampleInterval = 50, target = window } = options;
		this.maxSamples = maxSamples;
		this.sampleInterval = sampleInterval;
		this.target = target;
		this.attach();
	}

	destroy() {
		const o: EventListenerOptions = { capture: true };
		this.target.removeEventListener('focusin', this.onFocus, o);
		this.target.removeEventListener('keydown', this.onInteraction, o);
		this.target.removeEventListener('pointerdown', this.onInteraction, o);
		this.target.removeEventListener('pointermove', this.onPointer, o);
		this.target.removeEventListener('scroll', this.onScroll, o);
		this.target.removeEventListener('touchmove', this.onTouchMove, o);
	}

	export() {
		return {
			focus: this.focus,
			maxTouchPoints: navigator.maxTouchPoints || 0,
			pointer: this.pointer,
			scroll: this.scroll,
			time: Date.now(),
			touch: this.touch
		};
	}

	private attach(): void {
		const o: AddEventListenerOptions = { passive: true, capture: true };
		this.target.addEventListener('focusin', this.onFocus, o);
		this.target.addEventListener('keydown', this.onInteraction, o);
		this.target.addEventListener('pointerdown', this.onInteraction, o);
		this.target.addEventListener('pointermove', this.onPointer, o);
		this.target.addEventListener('scroll', this.onScroll, o);
		this.target.addEventListener('touchmove', this.onTouchMove, o);
	}

	private evict<T extends number[]>(buffer: T[]): void {
		if (buffer.length > this.maxSamples) {
			buffer.splice(0, buffer.length - this.maxSamples);
		}
	}

	private onFocus = (e: FocusEvent): void => {
		if (this.focusInteraction === 2) {
			return;
		}
		const el = e.target as HTMLElement;
		if (!(el instanceof Element)) {
			return;
		}
		const now = performance.now();
		if (this.focusStartTime === 0) {
			this.focusStartTime = now;
		}
		this.focus.push([
			Math.round(now - this.focusStartTime),
			el.tabIndex,
			this.TAG_CODES[el.tagName] ?? 0,
			this.focusInteraction ? 1 : 0
		]);
		this.evict(this.focus);
	};

	private onInteraction = (e: KeyboardEvent | MouseEvent): void => {
		this.focusInteraction = 'keyCode' in e ? 1 : 2;
		if (this.focusInteractionTimer) {
			clearTimeout(this.focusInteractionTimer);
		}
		this.focusInteractionTimer = setTimeout(() => {
			this.focusInteraction = 0;
		}, 100);
	};

	private onPointer = (e: PointerEvent): void => {
		if (e.pointerType === 'touch') {
			return;
		}
		const now = e.timeStamp || performance.now();
		this.pendingPointer = [Math.round(e.clientX), Math.round(e.clientY), Math.round(now)];
		if (now - this.lastPointerSample >= this.sampleInterval) {
			this.pointer.push(this.pendingPointer);
			this.lastPointerSample = now;
			this.pendingPointer = null;
			this.evict(this.pointer);
		}
	};

	private onScroll = (): void => {
		const now = performance.now();
		if (now - this.lastScrollSample < this.sampleInterval) {
			return;
		}
		this.scroll.push([Math.round(window.scrollY), Math.round(now)]);
		this.lastScrollSample = now;
		this.evict(this.scroll);
	};

	private onTouchMove = (e: TouchEvent): void => {
		const now = e.timeStamp || performance.now();
		const t = e.touches[0];
		if (!t) {
			return;
		}
		this.pendingTouch = [
			Math.round(t.clientX),
			Math.round(t.clientY),
			Math.round(now),
			Math.round(t.force * 1000) / 1000,
			Math.round(t.radiusX || 0),
			Math.round(t.radiusY || 0)
		];
		if (now - this.lastTouchSample >= this.sampleInterval) {
			this.touch.push(this.pendingTouch);
			this.lastTouchSample = now;
			this.pendingTouch = null;
			this.evict(this.touch);
		}
	};
}
