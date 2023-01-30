import React from "react";
import { RiTodoLine } from "react-icons/Ri";
import { IconContext } from "react-icons";
import { useAppSelector } from "../../hooks/hooks";

const ModalForItem = () => {
  const { text } = useAppSelector((state) => state.todos.selectTodo);

  return (
      <div className="flex flex-col gap-5 w-full h-full">
          <p className="text-center">Do you really want to delete this item?</p>
          <div className="border px-2 py-4 text-center bg-slate-100 flex items-center gap-3 overflow-x-scroll rounded-md">
              <IconContext.Provider value={{ size: "26" }}>
                <RiTodoLine />
              </IconContext.Provider>
              {text}
          </div>
      </div>
  );
};

export default ModalForItem;
