import TaskItemInterface from "./TaskItemInterface";

export default interface TaskInterface {
  name: string  
  isActive: boolean
  taskItems: TaskItemInterface[]
}