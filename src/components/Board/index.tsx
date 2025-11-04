import { useKanban } from "@/stores/useKanban";
import { Task } from "./Task";
export const Borad =() => {
  const { boards } = useKanban(state => state);
  return (
      <div className="flex flex-row">
        {boards.map((board) => (
          <div key={board.id} className="flex flex-row">
            <div className="kanban-group p-2 mr-2 w-[260px] rounded-3xl bg-blue-100">
              <div className="flex flex-col ">
                 <div className="w-fit rounded-full bg-blue-300 px-1 mb-2">未开始</div>
                   <div>
                          {
                           [0,1,2].map(item =>(
                             <Task key={item} title={`任务${item}`} />
                          ))}
                   </div>
               </div>
             </div>
           </div>
        ))}
      </div>
  )
}