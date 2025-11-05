import { create } from "zustand"

type Task = {
  id: number | string
  title: string
}

interface Board {
  groupId: string | number
  groupName: string
  tasks: Task[]
}
export const useKanban = create<{
  boards: Board[];
  createBoard:(board: Board) =>void
  updateBoard:(board: Board) =>void
}>((set) =>( {
    boards: [],
    createBoard: (board :Board) => set((state) => ({
        boards: [...state.boards, board]
    })),
    updateBoard: (board: Board) => set((state) => ({
        boards: state.boards.map(b => b.groupId === board.groupId ? board : b)
    }))
}))