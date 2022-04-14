import create from 'zustand'

type appState = {
    modal: string,
    updateModal: (newModal: string) => void,
    user: User | null,
    signUp: (username: string, full_name: string, email: string, password: string, avatar: string, phone: number, address: string, bio: string, isEmployer: boolean) => void
}

export const useStore = create<appState>((set) => ({
    modal: '',
    updateModal: newModal => set({ modal: newModal }),
    user: null,
    signUp: (username: string, full_name: string, email: string, password: string, avatar: string, phone: number, address: string, bio: string, isEmployer: boolean) => {
        fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, full_name, email, password, avatar, phone, address, bio, isEmployer })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    localStorage.token = data.token;
                    set({ user: data.user });
                }
            });
    }
}))