import { create } from "zustand";


interface UserData {
    id: string;
    username: string;
    level: string;
    setUser: (user: Partial<UserData>) => void;
}

export const useUserStore = create<UserData>((set) => ({
    id: "",
    username:"",
    level:"",
    setUser: (user) => set((state) => ({...state, ...user}))
}));