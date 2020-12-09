export class Task {
  id: number;
  name: string;
  description: string;
  priority: number;
  tags: string [];
  createdDate: Date;

  constructor(task: any) {
    this.id = task.id;
    this.name = task.name;
    this.description = task.description;
    this.priority = task.priority;
    this.tags = task.tags;
    this.createdDate = task.createdDate;
  }
}
