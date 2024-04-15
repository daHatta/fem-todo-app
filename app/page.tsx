"use client";

import { useState } from "react";
import Form from "./components/Form";
import { ToDoData } from "./types";
import StatusBar from "./components/StatusBar";

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoData[]>([
    { id: "1", task: "Complete online JavaScript course", completed: true },
    { id: "2", task: "Jog around the park 3x", completed: false },
    { id: "3", task: "10 minutes meditation", completed: false },
    { id: "4", task: "Read for 1 hour", completed: false },
    { id: "5", task: "Pick up groceries", completed: false },
    { id: "6", task: "Complete Todo App on Frontend Mentor", completed: false },
  ] as ToDoData[]);

  const [filterValue, setFilterValue] = useState("");

  const filteredList = toDoList.filter((todo) => {
    if (filterValue === "all") {
      return todo;
    } else if (filterValue === "active") {
      return !todo.completed;
    } else if (filterValue === "completed") {
      return todo.completed;
    } else {
      return todo;
    }
  });

  // Function to get filter value from Statusbar component
  const handleSelectedFilter = (filter: string) => {
    setFilterValue(filter);
  };

  return (
    <main>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      {toDoList.length > 0 && (
        <StatusBar
          toDoList={toDoList}
          setToDoList={setToDoList}
          handleSelectedFilter={handleSelectedFilter}
          filteredList={filteredList}
          filterValue={filterValue}
        />
      )}
    </main>
  );
}
