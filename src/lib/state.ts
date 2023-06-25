import { create } from 'zustand';
import { useEffect } from 'react';
import { useMedia } from 'react-use';

import type { Settings } from '~/types';



type Setter = {
	setAnimations: (value: boolean) => void;
	setSound: (value: boolean) => void;
};

export const usePersistantState = create<Settings & Setter>((set) => ({
	animations: true,
	sound: true,
	setAnimations: (value: boolean) => set({ animations: value }),
	setSound: (value: boolean) => set({ sound: value }),
})); 