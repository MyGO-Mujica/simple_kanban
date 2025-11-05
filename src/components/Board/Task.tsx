import { useDraggable } from "@dnd-kit/core";

interface TaskProps {
  id: number | string;
  title: string
}
export const Task = (props:TaskProps) => {
  const { id, title } = props;
  // ← 把这个组件变成可拖动的
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
     id,  // ← 任务的唯一 id（时间戳）
     data: {
        type: 'task', // ← 标记这是一个任务（非看板）
     }
  });
const style :React.CSSProperties | undefined =
      transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined


  return (
    <div 
       ref={setNodeRef} 
        {...listeners}
        {...attributes}
       className="p-2 mb-1 bg-white border-gray-100 rounded-md"
       style={style}
    >
      {title}
    </div>
  )
}