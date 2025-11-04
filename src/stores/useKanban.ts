import { create } from "zustand"

interface Board {
  id: string
  name: string
}
export const useKanban = create<{
  boards: Board[];
  createBoard:(board: Board) =>void
}>((set) =>( {
    boards: [],
    createBoard: (board :Board) => set((state) => ({
        boards: [...state.boards, board]
    }))
}))