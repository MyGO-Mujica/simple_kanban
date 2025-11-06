import { useKanban } from "@/stores/useKanban";
import { Task } from "./Task";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { KanbanGroup } from "./KanbanGroup";
import { Button }from "@/components/ui/button";

export const Board =() => {
  const { boards, updateBoard, moveTask} = useKanban(state => state);
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    // ✅ 检查是否有有效的放置目标
    if (!over || !active.id) return;
    
    // ✅ 正确解析 id（字符串分割，然后数组解构）
    const idStr = String(active.id);
    const [groupIdStr, taskIdStr] = idStr.split('-');
    
    if (!groupIdStr || !taskIdStr) return;
    
    // ✅ 转换为字符串传递给 moveTask
    moveTask(taskIdStr, groupIdStr, String(over.id));
  }
  return (
     /* ← dnd-kit 的根容器 */
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row">
        {boards.map((board) => (
          <div key={board.groupId} className="flex flex-row">
            <KanbanGroup  groupId={board.groupId} title={board.groupName} >
              <div className="kanban-group p-2 mr-2 w-[260px] rounded-3xl bg-blue-100">
                <div className="flex flex-col ">
                   <div className="w-fit rounded-full bg-blue-300 px-1 mb-2">未开始</div>
                     <div>
                          {
                           board.tasks.map((item) =>(
                             <Task 
                             key={item.id}  
                             id={`${board.groupId}-${item.id}`}
                             title={`${item.title}`} />
                          ))}
                     </div>
                  </div>
               </div>
                <Button 
                 onClick={() => updateBoard({ 
                 groupId: board.groupId,
                 groupName: board.groupName,
                 tasks: [...board.tasks, { id: Date.now(), title: `任务${board.tasks.length+1}` }] })}>
                  新建任务
                 </Button>
             </KanbanGroup>
           </div>
        ))}
      </div>
    </DndContext>
  )
}