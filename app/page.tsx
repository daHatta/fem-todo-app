"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconCross from "./images/icon-cross.svg";

export default function Home() {

  const [todoList, setTodoList] = useState([]);

  return (
    <main>
      <div className="addToDo flex gap-x-[10px] justify-center items-center w-full p-[12px] rounded-[6px]">
        <div>
          <label>
            <input type="checkbox" disabled />
            <span className="visually-hidden">Checkbox - disabled</span>
          </label>
        </div>
        <div className="w-full">
          <input type="text" placeholder="Create a new todo..." />
        </div>
      </div>

      <ul className="mt-[16px]">
        <li className="toDo flex flex-row justify-center items-center gap-x-[10px] p-[12px]">
          <div>
            <label>
              <input type="checkbox" />
              <span className="visually-hidden">Checkbox</span>
            </label>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-[10px] w-full">
            <input type="text" placeholder="Create a new todo..." className="w-full" />
            <button type="button">
              <Image 
                src={iconCross}
                width={12}
                height={12}
                alt="Icon Cross"
              />
            </button>
          </div>
        </li>
        <li className="toDo flex flex-row justify-center items-center gap-x-[10px] p-[12px]">
          <div>
            <label>
              <input type="checkbox" />
              <span className="visually-hidden">Checkbox</span>
            </label>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-[10px] w-full">
            <input type="text" placeholder="Create a new todo..." className="w-full" />
            <button type="button">
              <Image 
                src={iconCross}
                width={12}
                height={12}
                alt="Icon Cross"
              />
            </button>
          </div>
        </li>
      </ul>

      <div className="grid grid-areas-slim gap-y-[15px] 2xl:grid-areas-wide">
        <div className="counter flex justify-start p-[17px] rounded-bl-lg">
          <span>5 items left</span>
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
