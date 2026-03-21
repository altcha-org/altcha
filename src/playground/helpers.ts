import { get } from 'svelte/store';
import { logs } from './stores';

export function log(msg: string, data?: any) {
	logs.set([...get(logs), [`[${currentTime()}] ${msg}`, data]].slice(-1_000));
}

export function hookConsoleLog() {
	const origError = console.error;
	const origLog = console.log;
	console.log = (...args: any[]) => {
		log('widget', args);
		origLog(...args);
	};
	console.error = (...args: any[]) => {
		log('widget', args);
		origError(...args);
	};
}

export function currentTime() {
	const date = new Date();
	return (
		[
			date.getHours().toString().padStart(2, '0'),
			date.getMinutes().toString().padStart(2, '0'),
			date.getSeconds().toString().padStart(2, '0')
		].join(':') +
		'.' +
		date.getMilliseconds().toString().padStart(3, '0')
	);
}
