import { mount } from 'svelte';
import Playground from './Playground.svelte';

const playground = mount(Playground, {
	target: document.getElementById('app')!
});

export default playground;
