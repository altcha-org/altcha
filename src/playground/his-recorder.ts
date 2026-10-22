declare global {
	interface Window {
		__his?: unknown;
	}
}

const CHALLENGE_PATH = '/his-recorder/challenge';

const realFetch = window.fetch.bind(window);

window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
	const url = input instanceof Request ? input.url : String(input);
	if (!url.includes(CHALLENGE_PATH)) {
		return realFetch(input, init);
	}
	const method = (init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();
	if (method === 'POST') {
		window.__his = JSON.parse(String(init?.body));
		document.getElementById('out')!.textContent = JSON.stringify(window.__his, null, 2);
		return Response.json({ error: 'recorded' }, { status: 400 });
	}
	return Response.json({ his: { url: CHALLENGE_PATH } });
};

document.querySelector('form')!.addEventListener('submit', (ev) => {
	ev.preventDefault();
});

document.getElementById('download')!.addEventListener('click', () => {
	if (!window.__his) {
		return;
	}
	const blob = new Blob([JSON.stringify(window.__his, null, 2)], { type: 'application/json' });
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = `his-${Date.now()}.json`;
	link.click();
	URL.revokeObjectURL(link.href);
});

// Loaded after the fetch override so the widget never sees the real fetch for the challenge URL.
await import('../entry');
