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

      <ul>
        <li>
          <div>
            <label>
              <input type="checkbox" disabled />
              <span className="visually-hidden">Checkbox - disabled</span>
            </label>
          </div>
          <div className="w-full">
            <input type="text" placeholder="Create a new todo..." />
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
        <li>
          <div>
            <label>
              <input type="checkbox" disabled />
              <span className="visually-hidden">Checkbox - disabled</span>
            </label>
          </div>
          <div className="w-full">
            <input type="text" placeholder="Create a new todo..." />
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

      <div>
        <div>
          <span>5 items left</span>
        </div>
        <div>
          <Link href={"/"}>All</Link>
          <Link href={"/"}>Active</Link>
          <Link href={"/"}>Completed</Link>
        </div>
        <div>
          <Link href={"/"}>Clear Completed</Link>
        </div>
      </div>
    </main>
  );
};
