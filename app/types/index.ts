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
  filteredList: ToDoData[];
};

export type TodoItemPropsType = {
  index: number;
  item: ToDoData;
  toDoList: ToDoData[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoData[]>>;
};

export type StatusBarPropsType = {
  toDoList: ToDoData[];
  setToDoList: React.Dispatch<React.SetStateAction<ToDoData[]>>;
  handleSelectedFilter: (a: string) => void;
  filteredList: ToDoData[];
  filterValue: string;
};
