import React from "react";
import {TaskType} from "../types/TaskType";

type Props = {
   task: TaskType;
};

const TaskCard = ({task}: Props) => {
   return (
       <div className="task">
           <div className="task-content">
               <span> {task.taskName}</span>
               <span> {task.comment} </span>
           </div>
           <button className="card-button"> delete </button>
       </div>


   );
};
export default TaskCard;
