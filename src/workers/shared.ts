import { solveChallenge } from '../pow';
import type { DeriveKeyFunction } from '../types';

export function handler(options: { deriveKey: DeriveKeyFunction }) {
	const { deriveKey } = options;

	let controller: AbortController | undefined = undefined;

	self.onmessage = async (message) => {
		const { challenge, counterMode, counterStart, counterStep, type } = message.data;
		if (type === 'abort') {
			controller?.abort();
		} else if (type === 'work') {
			controller = new AbortController();
			let solution;
			try {
				solution = await solveChallenge({
					challenge,
					controller,
					counterStart,
					counterStep,
					deriveKey,
					counterMode
				});
			} catch (err) {
				return self.postMessage({ error: err });
			}
			self.postMessage(solution);
		}
	};
}
