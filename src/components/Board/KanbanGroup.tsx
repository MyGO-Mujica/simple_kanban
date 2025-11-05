import { useDroppable } from "@dnd-kit/core";
import type React from "react";

interface KanbanGroupProps extends React.PropsWithChildren{
    title: string
    groupId: string | number;
}
export const KanbanGroup = (props: KanbanGroupProps) => {
   const { setNodeRef } = useDroppable({
      id: props.groupId,  // ← 用 id 标识这个可接收区
   })

   return <div ref={setNodeRef}>{props.children}</div>
}