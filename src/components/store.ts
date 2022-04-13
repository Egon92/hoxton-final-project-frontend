import create from 'zustand'

type appState = {
    modal: string,
    updateModal: (newModal: string) => void
}

export const useStore = create<appState>((set) => ({
    modal: '',
    updateModal: newModal => set({ modal: newModal }),
}))