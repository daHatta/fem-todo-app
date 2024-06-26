import React, { useState } from "react";
import { getRandomNumber } from "@/app/util";
import { FormPropsType } from "@/app/types";

const Form = ({ toDoList, setToDoList }: FormPropsType) => {
  const [newToDo, setNewToDo] = useState<string>("");

  /* Function to add another task to the list per Enter Key */
  const handleKeyUp = (key: string) => {
    if (key === "Enter" && newToDo) {
      const randomNumber = getRandomNumber();

      const newItem = {
        id: `item-${randomNumber}`,
        task: newToDo,
        completed: false,
      };

      setToDoList(toDoList.concat(newItem));

      setNewToDo("");
    }
  };

  return (
    <div className="newtodo flex gap-x-[10px] justify-center items-center w-full py-[10px] px-[20px] rounded-[5px] 2xl:gap-x-[24px] 2xl:py-[18px] 2xl:px-[24px]">
      <div>
        <label htmlFor="newTodo">
          <input id="newTodo" type="checkbox" disabled />
          <span className="visually-hidden">Checkbox - disabled</span>
        </label>
      </div>
      <div className="w-full">
        <label htmlFor="newToDo">
          <input
            className="w-full"
            type="text"
            id="newToDo"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e.key)}
            placeholder="Create a new todo..."
          />
          <span className="visually-hidden">Create new Todo</span>
        </label>
      </div>
    </div>
  );
};

export default Form;
