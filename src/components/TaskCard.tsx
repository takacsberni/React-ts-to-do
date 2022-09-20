import React from "react";
import {TaskType} from "../types/TaskType";

type Props = {
   task: TaskType;
};

const TaskCard = ({task}: Props) => {
   return <div key={task.taskName}> {task.taskName} </div>;
};
export default TaskCard;
