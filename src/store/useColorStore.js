// create a new store for colors

import { create } from 'zustand'


const useColorStore = create((set) => ({
  color: '#ccc',
	changeColor: (color) => set({ color }),
	resetColor: () => set({ color: 'red' }),

  
}));

export default useColorStore;
