import { handler } from './shared';
import { deriveKey } from '../algorithms/pbkdf2';

handler({
	deriveKey
});

export {};
