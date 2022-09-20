import React from "react";
import {TaskType} from "../types/TaskType";

type Props = {
   task: TaskType;
};

const TaskCard = ({task}: Props) => {
   return <div> {task.taskName} </div>;
};
export default TaskCard;
