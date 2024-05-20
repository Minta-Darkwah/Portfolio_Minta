export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/pag_1945": [3],
		"/pag_2020": [4],
		"/pag_borsellino": [5],
		"/pag_dittature": [6],
		"/pag_femminismo": [7],
		"/pag_iniz": [8],
		"/pag_mafia": [9],
		"/pag_penadimorte": [10]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';