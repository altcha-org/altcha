import { afterEach, describe, expect, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import { Collector } from '../../src/his';

let collector: Collector | null = null;

afterEach(() => {
	collector?.destroy();
	collector = null;
	document.body.replaceChildren();
});

describe('HIS Collector', () => {
	test('records a click with hold time and pointer type', async () => {
		const el = document.createElement('button');
		el.style.width = '40px';
		el.style.height = '40px';
		document.body.appendChild(el);
		collector = new Collector();
		await userEvent.click(el);
		const { click } = collector.export();
		expect(click).toHaveLength(1);
		const [, , , hold, , , pointerType] = click[0];
		expect(hold).toBeGreaterThanOrEqual(0);
		expect(pointerType).toBe(0);
	});

	test('records key hold times', async () => {
		const el = document.createElement('input');
		document.body.appendChild(el);
		collector = new Collector();
		await userEvent.type(el, 'abc');
		const { key } = collector.export();
		expect(key).toHaveLength(3);
		for (const [, hold] of key) {
			expect(hold).toBeGreaterThanOrEqual(0);
		}
	});

	test('counts untrusted events without sampling them', () => {
		collector = new Collector();
		for (let i = 0; i < 3; i++) {
			window.dispatchEvent(new PointerEvent('pointermove', { clientX: 5, clientY: 5 }));
		}
		const data = collector.export();
		expect(data.untrusted).toBe(3);
		expect(data.pointer).toHaveLength(0);
	});

	test('exportSinceMark returns samples after mark and export keeps the buffer', async () => {
		const el1 = document.createElement('input');
		const el2 = document.createElement('input');
		document.body.append(el1, el2);
		collector = new Collector();
		await userEvent.tab();
		await userEvent.keyboard('abc');
		window.dispatchEvent(new PointerEvent('pointermove', { clientX: 5, clientY: 5 }));
		collector.mark();
		for (let i = 0; i < 2; i++) {
			window.dispatchEvent(new PointerEvent('pointermove', { clientX: 5, clientY: 5 }));
		}
		await userEvent.tab();
		await userEvent.keyboard('de');
		const all = collector.export();
		const since = collector.exportSinceMark();
		// Each Tab press is a key sample too: Tab + abc before the mark, Tab + de after it.
		expect(all.key).toHaveLength(7);
		expect(since.key).toHaveLength(3);
		expect(all.focus).toHaveLength(2);
		expect(since.focus).toHaveLength(1);
		expect(since.focus[0][0]).toBe(0);
		expect(all.untrusted).toBe(3);
		expect(since.untrusted).toBe(2);
	});

	test('exports payload version 2', () => {
		collector = new Collector();
		expect(collector.export().v).toBe(2);
	});
});
