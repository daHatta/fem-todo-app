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

  return (
    <main>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      {toDoList.length > 0 && (
        <StatusBar toDoList={toDoList} setToDoList={setToDoList} />
      )}
    </main>
  );
}
