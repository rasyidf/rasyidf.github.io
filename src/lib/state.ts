import { create } from 'zustand';

import type { Settings } from '~/types';



type Setter = {
	setAnimations: (value: boolean) => void;
	setSound: (value: boolean) => void;
};

export const usePersistantState = create<Settings & Setter>((set) => ({
	animations: true,
	sound: true,
	setAnimations: (value: boolean): void => set({ animations: value }),
	setSound: (value: boolean): void => set({ sound: value }),
})); 