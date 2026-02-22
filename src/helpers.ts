export function injectCss(css: string, id: string = 'altcha-css') {
	if (typeof document !== 'undefined' && document && !document.getElementById(id)) {
		const style = document.createElement('style');
		style.id = id;
		style.textContent = css;
		document.head.appendChild(style);
	}
}
