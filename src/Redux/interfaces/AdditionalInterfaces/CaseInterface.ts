import CaseItemInterface from "./CaseItemInterface";
import TaskInterface from "./TaskInterface";

export default interface CaseInterface {
  name: string
  icon: string
  isActive: boolean
  caseItems: CaseItemInterface[]
  tasks: TaskInterface[]
}