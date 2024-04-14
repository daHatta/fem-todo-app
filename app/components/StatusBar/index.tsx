import React from "react";
import Link from "next/link";
import { StatusBarPropsType } from "@/app/types";
import TodoList from "../TodoList";

const StatusBar = ({
  toDoList,
  setToDoList,
  handleSelectedFilter,
  filteredList,
}: StatusBarPropsType) => {
  const activeTasks = toDoList.filter((task) => !task.completed).length;

  /* Function to filter Tasks accourding their status active/completed */
  const handleFilterValue = (filter: string) => {
    handleSelectedFilter(filter);
  };

  /* Function to delete all completed tasks from the list */
  const handleDeleteCompleted = () => {
    setToDoList(toDoList.filter((task) => !task.completed));
  };

  return (
    <>
      <TodoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        filteredList={filteredList}
      />
      <div className="grid grid-areas-slim gap-y-[15px] drop-shadow-lg 2xl:grid-areas-wide">
        <div className="counter flex justify-start p-[17px] rounded-bl-lg">
          <span>{activeTasks} items left</span>
        </div>
        <div className="options flex justify-center gap-[20px] p-[17px] rounded-[6px] 2xl:rounded-none">
          <Link href={"/"} onClick={() => handleFilterValue("all")}>
            All
          </Link>
          <Link href={"/"} onClick={() => handleFilterValue("active")}>
            Active
          </Link>
          <Link href={"/"} onClick={() => handleFilterValue("completed")}>
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
