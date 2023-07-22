import { create } from 'zustand'


interface User {
    email: string,
    password: string,
    login: (email: string, password: string) => void , 
    logout : () => void
}



const useUser = create<User>((set) => ({
    email: '',
    password: '',
    login: (email: string, password: string) => set(() => ({ email: email, password: password })),
    logout : () => set(() => ({ email: '', password: '' }))
}))

export default useUser;