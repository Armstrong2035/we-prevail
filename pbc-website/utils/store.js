import { create } from "zustand";

const useStore = create ((set) => ({
    playlists: [],
    setPlaylists: (allPlaylists) => set((state) => ({
        playlists: allPlaylists
    }))
}))

export {useStore}