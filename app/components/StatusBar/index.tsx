import React from "react";
import Link from "next/link";
import { StatusBarPropsType } from "@/app/types";
import TodoList from "../TodoList";

const StatusBar = ({ toDoList, setToDoList }: StatusBarPropsType) => {
  const activeTasks = toDoList.filter((task) => !task.completed).length;

  /* Function to filter Tasks accourding their status active/completed */
  const handleSortTodoList = (amount: string) => {
    const completeData = Array.from(toDoList);
    const completedTasks = completeData.filter(
      (task) => task.completed === true
    );
    const activeTasks = completeData.filter((task) => task.completed === false);

    console.log(completeData);
    console.log(completedTasks);
    console.log(activeTasks);

    if (amount === "completed") {
      setToDoList(completedTasks);
    } else if (amount === "active") {
      setToDoList(activeTasks);
    } else if (amount === "all") {
      setToDoList(completeData);
    }
  };

  /* Function to delete all completed tasks from the list */
  const handleDeleteCompleted = () => {
    setToDoList(toDoList.filter((task) => !task.completed));
  };

  return (
    <>
      <TodoList toDoList={toDoList} setToDoList={setToDoList} />
      <div className="grid grid-areas-slim gap-y-[15px] drop-shadow-lg 2xl:grid-areas-wide">
        <div className="counter flex justify-start p-[17px] rounded-bl-lg">
          <span>{activeTasks} items left</span>
        </div>
        <div className="options flex justify-center gap-[20px] p-[17px] rounded-[6px] 2xl:rounded-none">
          <Link href={"/"} onClick={() => handleSortTodoList("all")}>
            All
          </Link>
          <Link href={"/"} onClick={() => handleSortTodoList("active")}>
            Active
          </Link>
          <Link href={"/"} onClick={() => handleSortTodoList("completed")}>
            Completed
          </Link>
        </div>
        <div className="delete flex justify-end p-[17px] rounded-br-lg">
          <Link href={"/"} onClick={handleDeleteCompleted}>
            Clear Completed
          </Link>
        </div>
      </div>
    </>
  );
};

export default StatusBar;
