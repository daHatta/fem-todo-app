"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconCross from "./images/icon-cross.svg";

export default function Home() {

  const [newToDo, setNewToDo] = useState("");
  const [toDoList, setToDoList] = useState([
    { id: "1", content: "Item 1"},
    { id: "2", content: "Item 2"},
    { id: "3", content: "Item 3"},
  ]);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 9999);
  }

  const handleKeyUp = (key: string) => {
    if (key === "Enter" && newToDo) {
      const randomNumber = getRandomNumber();

      const newItem = {
        id: `item-${randomNumber}`,
        content: newToDo,
      }

      setToDoList(toDoList.concat(newItem));

      setNewToDo("");
    }
  }

  const handleDelete = (id: number) => {
    if (id > -1) {
      setToDoList(toDoList.slice(0, id).concat(toDoList.slice(id+1)))
    }
  }

  return (
    <main>
      <div className="newToDo flex gap-x-[10px] justify-center items-center w-full p-[12px] rounded-[6px]">
        <div>
          <label>
            <input type="checkbox" disabled />
            <span className="visually-hidden">Checkbox - disabled</span>
          </label>
        </div>
        <div className="w-full">
          <input type="text" id="newToDo" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} onKeyUp={(e) => handleKeyUp(e.key)} placeholder="Create a new todo..." />
        </div>
      </div>
      
      <ul className="mt-[16px]">
        {
          toDoList?.map((item, index) => {
            return (
              <li key={item.id} className="toDo flex flex-row justify-center items-center gap-x-[10px] p-[12px]">
                <div>
                  <label htmlFor={`${index}`}>
                    <input id={`${index}`} type="checkbox" />
                    <span className="visually-hidden">Checkbox</span>
                  </label>
                </div>
                <div className="flex flex-row justify-between items-center gap-x-[10px] w-full">
                  <input type="text" value={item.content} placeholder="Create a new todo..." className="w-full" />
                  <button type="button" onClick={() => handleDelete(index)}>
                    <Image 
                      src={iconCross}
                      width={12}
                      height={12}
                      alt="Icon Cross"
                    />
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>

      <div className="grid grid-areas-slim gap-y-[15px] drop-shadow-lg 2xl:grid-areas-wide">
        <div className="counter flex justify-start p-[17px] rounded-bl-lg">
          <span>{toDoList.length} items left</span>
        </div>
        <div className="options flex justify-center gap-[20px] p-[17px] rounded-[6px] 2xl:rounded-none">
          <Link href={"/"}>All</Link>
          <Link href={"/"}>Active</Link>
          <Link href={"/"}>Completed</Link>
        </div>
        <div className="delete flex justify-end p-[17px] rounded-br-lg">
          <Link href={"/"}>Clear Completed</Link>
        </div>
      </div>
    </main>
  );
};
