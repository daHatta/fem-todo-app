import React from "react";

import { TodoListPropsType } from "@/app/types";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import TodoItem from "../TodoItem";

const TodoList = ({
  toDoList,
  setToDoList,
  filteredList,
}: TodoListPropsType) => {
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
                <TodoItem
                  key={index}
                  index={index}
                  item={item}
                  toDoList={toDoList}
                  setToDoList={setToDoList}
                />
              ))}
            {dropProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
