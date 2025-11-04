import { useKanban } from "@/stores/useKanban"
import { Button } from "@/components/ui/button";
import { Borad } from "@/components/Board";

export const BoardPage = () => {
   const createBoard = useKanban(state => state.createBoard);
    return (    
      <div>
        <Borad  />
        <Button 
           variant="outline"
            onClick ={() =>
                createBoard({id:`${Date.now()}`, name: '新板'})
            }>
            新建板
         </Button>
      </div>
      )
}