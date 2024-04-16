import React from "react";

import classes from "./index.module.css";
import { TodoItemPropsType } from "@/app/types";
import { Draggable } from "@hello-pangea/dnd";
import Image from "next/image";
import iconCross from "../../images/icon-cross.svg";

const TodoItem = ({
  index,
  item,
  toDoList,
  setToDoList,
}: TodoItemPropsType) => {
  /* Function to set task as completed or active */
  const handleCompleted = (id: string) => {
    const items = Array.from(toDoList);

    items.map((item, index) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });

    setToDoList(items);
  };

  /* Function to delete a task */
  const handleDelete = (id: number) => {
    if (id > -1) {
      setToDoList(toDoList.slice(0, id).concat(toDoList.slice(id + 1)));
    }
  };

  return (
    <Draggable draggableId={item.id} key={item.id} index={index}>
      {(dragProvided, snapshot) => (
        <li
          key={`key-${item.id}`}
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
          className="todo flex flex-row justify-between items-center gap-x-[10px] pt-[17px] pb-[15px] px-[20px]"
        >
          <div className="flex flex-row justify-center items-center gap-x-[10px]">
            <input
              id={`${index}`}
              type="checkbox"
              defaultChecked={item.completed}
              onClick={() => handleCompleted(item.id)}
            />
            <label htmlFor={`${index}`}>
              <span className={item.completed ? classes.completed : ""}>
                {item.task}
              </span>
            </label>
          </div>
          <button
            type="button"
            onClick={() => handleDelete(index)}
            className="btn-delete flex-none"
          >
            <Image src={iconCross} width={16} height={16} alt="Icon Cross" />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default TodoItem;
