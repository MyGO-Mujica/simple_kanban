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
  moveTask:(taskId: string, sourceGroupId: string, targetGroupId: string) => void;
}>((set) =>( {
    boards: [],
    createBoard: (board :Board) => set((state) => ({
        boards: [...state.boards, board]
    })),
    updateBoard: (board: Board) => set((state) => ({
        boards: state.boards.map(b => b.groupId === board.groupId ? board : b)
    })),
  moveTask(taskId: string, sourceGroupId: string, targetGroupId: string) {
    set(state => {
      let movedTask: Task | null = null;
      
      // ✅ 第一次遍历：找到并删除源任务
      const boardsAfterRemove = state.boards.map(board => {
        if (String(board.groupId) === String(sourceGroupId)) {
          const filteredTasks = board.tasks.filter(task => {
            if (String(task.id) === String(taskId)) {
              movedTask = { ...task };  // ✅ 保存原任务
              return false;
            }
            return true;
          });
          return { ...board, tasks: filteredTasks };
        }
        return board;
      });
      
      // ✅ 第二次遍历：添加任务到目标看板
      const boardsAfterAdd = boardsAfterRemove.map(board => {
        if (String(board.groupId) === String(targetGroupId) && movedTask) {
          return { 
            ...board, 
            tasks: [...board.tasks, movedTask] 
          };
        }
        return board;
      });
      
      return { boards: boardsAfterAdd };
    });
  }
}))
  
