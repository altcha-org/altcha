export type ClickSample = [
	x: number,
	y: number,
	t: number,
	hold: number,
	offsetX: number,
	offsetY: number,
	pointerType: number,
	moves: number
];

type FocusSample = [elapsed: number, tabIndex: number, tagCode: number, hasInteraction: number];

export type KeySample = [t: number, hold: number];

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

export interface HisData {
	click: ClickSample[];
	focus: FocusSample[];
	key: KeySample[];
	maxTouchPoints: number;
	pointer: PointerSample[];
	scroll: ScrollSample[];
	time: number;
	touch: TouchSample[];
	untrusted: number;
	v: 2;
	webdriver: boolean;
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

	readonly POINTER_TYPES: Record<string, number> = {
		mouse: 0,
		pen: 1,
		touch: 2
	};

	readonly maxSamples: number;

	readonly sampleInterval: number;

	readonly target: Window;

	private focusStartTime = 0;

	private focusInteraction = 0;

	private focusInteractionTimer?: ReturnType<typeof setTimeout>;

	private lastPointerSample = 0;

	private lastTouchSample = 0;

	private lastScrollSample = 0;

	private pendingClick: { sample: ClickSample; down: number } | null = null;

	private keysDown = new Map<string, { sample: KeySample; down: number }>();

	/** Raw (unthrottled) non-touch pointermove timestamps, newest last */
	private moveTimes: number[] = [];

	private untrusted = 0;

	private click: ClickSample[] = [];

	private focus: FocusSample[] = [];

	private key: KeySample[] = [];

	private pointer: PointerSample[] = [];

	private scroll: ScrollSample[] = [];

	private touch: TouchSample[] = [];

	private markTime: number | null = null;

	private markUntrusted = 0;

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
		this.target.removeEventListener('keydown', this.onKeyDown, o);
		this.target.removeEventListener('keyup', this.onKeyUp, o);
		this.target.removeEventListener('pointerdown', this.onPointerDown, o);
		this.target.removeEventListener('pointerup', this.onPointerUp, o);
		this.target.removeEventListener('pointermove', this.onPointer, o);
		this.target.removeEventListener('scroll', this.onScroll, o);
		this.target.removeEventListener('touchmove', this.onTouchMove, o);
	}

	export(): HisData {
		return {
			click: this.click,
			focus: this.focus,
			key: this.key,
			maxTouchPoints: navigator.maxTouchPoints || 0,
			pointer: this.pointer,
			scroll: this.scroll,
			time: Date.now(),
			touch: this.touch,
			untrusted: this.untrusted,
			v: 2,
			webdriver: navigator.webdriver === true
		};
	}

	/** Starts the window of `exportSinceMark()`; collected samples are kept. */
	mark(): void {
		this.markTime = performance.now();
		this.markUntrusted = this.untrusted;
	}

	/** Same shape as `export()`, limited to samples collected since the latest `mark()`. */
	exportSinceMark(): HisData {
		const data = this.export();
		const since = this.markTime;
		if (since === null) {
			return data;
		}
		// Click/key/pointer/touch `t` come from `e.timeStamp`, on the `performance.now()` clock.
		const focus = this.focus.filter((s) => this.focusStartTime + s[0] >= since);
		const first = focus[0]?.[0] ?? 0;
		return {
			...data,
			click: this.click.filter((s) => s[2] >= since),
			focus: focus.map((s): FocusSample => [s[0] - first, s[1], s[2], s[3]]),
			key: this.key.filter((s) => s[0] >= since),
			pointer: this.pointer.filter((s) => s[2] >= since),
			scroll: this.scroll.filter((s) => s[1] >= since),
			touch: this.touch.filter((s) => s[2] >= since),
			untrusted: this.untrusted - this.markUntrusted
		};
	}

	private attach(): void {
		const o: AddEventListenerOptions = { passive: true, capture: true };
		this.target.addEventListener('focusin', this.onFocus, o);
		this.target.addEventListener('keydown', this.onKeyDown, o);
		this.target.addEventListener('keyup', this.onKeyUp, o);
		this.target.addEventListener('pointerdown', this.onPointerDown, o);
		this.target.addEventListener('pointerup', this.onPointerUp, o);
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
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
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

	private setInteraction(kind: 1 | 2): void {
		this.focusInteraction = kind;
		clearTimeout(this.focusInteractionTimer);
		this.focusInteractionTimer = setTimeout(() => {
			this.focusInteraction = 0;
		}, 100);
	}

	private onKeyDown = (e: KeyboardEvent): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		this.setInteraction(1);
		if (e.repeat) {
			return;
		}
		const now = e.timeStamp || performance.now();
		const sample: KeySample = [Math.round(now), -1];
		this.key.push(sample);
		this.evict(this.key);
		this.keysDown.set(e.code, { sample, down: now });
	};

	private onKeyUp = (e: KeyboardEvent): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		const pending = this.keysDown.get(e.code);
		if (pending) {
			const now = e.timeStamp || performance.now();
			pending.sample[1] = Math.round(now - pending.down);
			this.keysDown.delete(e.code);
		}
	};

	private onPointerDown = (e: PointerEvent): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		this.setInteraction(2);
		const now = e.timeStamp || performance.now();
		const rect = e.target instanceof Element ? e.target.getBoundingClientRect() : null;
		let moves = 0;
		for (const t of this.moveTimes) {
			if (t >= now - 500 && t < now) {
				moves++;
			}
		}
		const sample: ClickSample = [
			Math.round(e.clientX),
			Math.round(e.clientY),
			Math.round(now),
			-1,
			rect ? Math.round(e.clientX - (rect.left + rect.width / 2)) : 0,
			rect ? Math.round(e.clientY - (rect.top + rect.height / 2)) : 0,
			this.POINTER_TYPES[e.pointerType] ?? 3,
			moves
		];
		this.click.push(sample);
		this.evict(this.click);
		this.pendingClick = { sample, down: now };
	};

	private onPointerUp = (e: PointerEvent): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		if (this.pendingClick) {
			const now = e.timeStamp || performance.now();
			this.pendingClick.sample[3] = Math.round(now - this.pendingClick.down);
			this.pendingClick = null;
		}
	};

	private onPointer = (e: PointerEvent): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		if (e.pointerType === 'touch') {
			return;
		}
		const now = e.timeStamp || performance.now();
		this.moveTimes.push(now);
		if (this.moveTimes.length > 32) {
			this.moveTimes.shift();
		}
		if (now - this.lastPointerSample >= this.sampleInterval) {
			this.pointer.push([Math.round(e.clientX), Math.round(e.clientY), Math.round(now)]);
			this.lastPointerSample = now;
			this.evict(this.pointer);
		}
	};

	private onScroll = (e: Event): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		const now = performance.now();
		if (now - this.lastScrollSample < this.sampleInterval) {
			return;
		}
		this.scroll.push([Math.round(window.scrollY), Math.round(now)]);
		this.lastScrollSample = now;
		this.evict(this.scroll);
	};

	private onTouchMove = (e: TouchEvent): void => {
		if (!e.isTrusted) {
			this.untrusted++;
			return;
		}
		const now = e.timeStamp || performance.now();
		const t = e.touches[0];
		if (!t) {
			return;
		}
		if (now - this.lastTouchSample >= this.sampleInterval) {
			this.touch.push([
				Math.round(t.clientX),
				Math.round(t.clientY),
				Math.round(now),
				Math.round(t.force * 1000) / 1000,
				Math.round(t.radiusX || 0),
				Math.round(t.radiusY || 0)
			]);
			this.lastTouchSample = now;
			this.evict(this.touch);
		}
	};
}
