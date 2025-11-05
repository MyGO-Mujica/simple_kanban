import { useKanban } from "@/stores/useKanban";
import { Task } from "./Task";
import { DndContext } from "@dnd-kit/core";
import { KanbanGroup } from "./KanbanGroup";
import { Button }from "@/components/ui/button";

export const Board =() => {
  const { boards, updateBoard} = useKanban(state => state);
  return (
     /* ← dnd-kit 的根容器 */
    <DndContext>
      <div className="flex flex-row">
        {boards.map((board) => (
          <div key={board.groupId} className="flex flex-row">
            <KanbanGroup  groupId={board.groupId} title={board.groupName} >
              <div className="kanban-group p-2 mr-2 w-[260px] rounded-3xl bg-blue-100">
                <div className="flex flex-col ">
                   <div className="w-fit rounded-full bg-blue-300 px-1 mb-2">未开始</div>
                     <div>
                          {
                           board.tasks.map((item, index) =>(
                             <Task 
                             key={item.id}  
                             id={item.id}
                             title={`任务${index + 1}`} />
                          ))}
                     </div>
                  </div>
               </div>
                <Button 
                 onClick={() => updateBoard({ 
                 groupId: board.groupId,
                 groupName: board.groupName,
                 tasks: [...board.tasks, { id: Date.now(), title: '新任务' }] })}>
                  新建任务
                 </Button>
             </KanbanGroup>
           </div>
        ))}
      </div>
    </DndContext>
  )
}