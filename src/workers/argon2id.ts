import { handler } from './shared';
import { deriveKey } from '../algorithms/argon2id';

handler({
	deriveKey
});

export {};
