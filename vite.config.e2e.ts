import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			headless: true,
			instances: [{ browser: 'chromium' }],
			provider: playwright(),
			screenshotFailures: false
		},
		include: ['e2e/**/*.fixture.ts'],
		testTimeout: 30_000
	}
});
