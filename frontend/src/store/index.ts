import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import type { Trashcan } from '@trashable/hydrogen';

// define your typings for the store state
export interface State {
	trashcans: Trashcan.Trashcan[];
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state: {
		trashcans: [],
	},
	mutations: {
		setTrashcans(state, newTrashcans) {
			state.trashcans = newTrashcans;
		},
	},
	actions: {},
	modules: {},
});
