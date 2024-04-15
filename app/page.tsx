"use client";

import { useState } from "react";
import Form from "./components/Form";
import { ToDoData } from "./types";
import StatusBar from "./components/StatusBar";

export default function Home() {
  const [toDoList, setToDoList] = useState<ToDoData[]>([
    { id: "1", task: "Item 1", completed: false },
    { id: "2", task: "Item 2", completed: true },
    { id: "3", task: "Item 3", completed: false },
    { id: "4", task: "Item 4", completed: false },
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
