export type ToDoData = {
  id: string;
  task: string;
  completed: boolean;
};

export type FormPropsType = {
  toDoList: ToDoData[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoData[]>>;
};

export type TodoListPropsType = {
  toDoList: ToDoData[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoData[]>>;
};

export type StatusBarPropsType = {
  toDoList: ToDoData[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoData[]>>;
};
