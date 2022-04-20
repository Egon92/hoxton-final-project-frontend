import create from 'zustand'

type appState = {
    modal: string,
    updateModal: (newModal: string) => void,
    user: User | null,
    signUp: (username: string, full_name: string, email: string, password: string, avatar: string, phone: number, address: string, bio: string, isEmployer: boolean) => void,
    signIn: (username: string, password: string) => void,
    signOut: () => void,
    validate: () => void,
    selectedProject : number,
    setSelectedProject : (id: number) => void,
    addProject: (project: Project) => void
}

export const useStore = create<appState>((set, get) => ({
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
    },
    signIn: (email: string, password: string) => {
        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
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
    },
    signOut: () => {
        localStorage.removeItem('token')
        set({ user: null })
    },
    validate: () => {
        if (localStorage.token) {
            fetch('http://localhost:4000/validate', {
                headers: {
                    Authorization: localStorage.token
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    if (data.error) {
                        console.log(data.error)
                    } else {
                        set({ user: data })
                    }
                });
        }
    },
    selectedProject: 0,
    setSelectedProject: (id: number) => {
        set({ selectedProject: id })
    },
    addProject: (project: Project) => {
        const updatedUser:User = JSON.parse(JSON.stringify(get().user))
        updatedUser?.postedProjects.push(project)
        set({ user: updatedUser });
    }
}))