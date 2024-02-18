import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { Settings } from '~/types';



type Setter = {
	setAnimations: (value: boolean) => void;
	setSound: (value: boolean) => void;
};

export const usePersistantState = create(persist<Settings & Setter>((set) => ({
	animations: true,
	sound: true,
	setAnimations: (value: boolean): void => {
		return set({ animations: value });
	},
	setSound: (value: boolean): void => {
		return set({ sound: value });
	}
}), {
	name: 'settings',
	storage: createJSONStorage(() => localStorage),
})); 