import { useKanban } from "@/stores/useKanban"
import { Button } from "@/components/ui/button";
import { Board } from "@/components/Board";

export const BoardPage = () => {
   const createBoard = useKanban(state => state.createBoard);
    return (    
      <div>
        <Board  />
        <Button 
           variant="outline"
            onClick ={() =>
                createBoard({groupId:`${Date.now()}`, groupName: '新板', tasks: []})
            }>
            新建板
         </Button>
      </div>
      )
}