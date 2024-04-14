import React from "react";
import { TodoListPropsType } from "@/app/types";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import Image from "next/image";
import iconCross from "../../images/icon-cross.svg";

const TodoList = ({
  toDoList,
  setToDoList,
  filteredList,
}: TodoListPropsType) => {
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

  /* Function to drag item to another place of the list  */
  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const items = Array.from(toDoList);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setToDoList(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(dropProvided) => (
          <ul
            className="mt-[16px]"
            {...dropProvided.droppableProps}
            ref={dropProvided.innerRef}
          >
            {toDoList &&
              filteredList.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(dragProvided, snapshot) => (
                    <li
                      key={`key-${item.id}`}
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      className="toDo flex flex-row justify-center items-center gap-x-[10px] p-[12px]"
                    >
                      <div>
                        <label htmlFor={`${index}`}>
                          <input
                            id={`${index}`}
                            type="checkbox"
                            defaultChecked={item.completed}
                            onClick={() => handleCompleted(item.id)}
                          />
                          <span className="visually-hidden">Checkbox</span>
                        </label>
                      </div>
                      <div className="todoTitle flex flex-row items-center gap-x-[10px] w-full">
                        <div className="w-full">{item.task}</div>
                        <button
                          type="button"
                          onClick={() => handleDelete(index)}
                          className="flex-none w-[11px]"
                        >
                          <Image
                            src={iconCross}
                            width={12}
                            height={12}
                            alt="Icon Cross"
                          />
                        </button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
            {dropProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
