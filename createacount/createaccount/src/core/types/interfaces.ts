export  interface Task{
    id: number;
    name: string;
    status: Status;
  }

export  enum Status {
    ToDo = 'To Do',
    InProgress='In Progress',
    Done = 'Done'
  }