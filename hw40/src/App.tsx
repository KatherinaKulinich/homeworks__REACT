import React from "react";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal/Modal";
import ModalForAll from "./components/Modal/ModalToDeleteAll";
import ModalForItem from "./components/Modal/ModalToDeleteItem";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import useModal from "./hooks/useModal";
import useRemoved from "./hooks/useRemoved";
import useTheme from "./hooks/useTheme";
import useTodos from "./hooks/useTodos";




function App() {

  const { currentTheme, handleChangeTheme } = useTheme();
  const { todosList, handleCompleteAllTodos } = useTodos();
  const { deleteAll, removeSelectedTodo } = useRemoved();
  const {
    onToggleModalToDeleteAll,
    onToggleModalToDeleteItem,
    modalStateDeleteAll,
    modalStateDeleteItem,
  } = useModal();

 

  return (
    <div
      className={`${
        currentTheme === "dark" ? "bg-zinc-700" : "bg-slate-50"
      } w-screen min-h-screen  relative`}
    >
      <Button
        buttonColor="blue"
        buttonAdditionalStyles="fixed top-9 right-7"
        buttonType="button"
        buttonText="Change theme"
        handleClick={handleChangeTheme}
      />
      <div
        className={`border rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-[600px]  flex flex-col gap-10 bg-slate-100  ${
          currentTheme === "dark" ? "bg-zinc-500" : "bg-slate-50"
        }`}
      >
        <h1 className="text-center uppercase text-xl font-bold">To Do List</h1>
        <TodoForm />
        <TodoList />

        <div className="w-full flex justify-between items-center">
          <p className="uppercase">
            {`${todosList?.length}  ${
              todosList?.length === 1 ? "task" : "tasks"
            }`}
          </p>
          <Button
            buttonColor="blue"
            buttonType="button"
            buttonText="Complete All"
            handleClick={handleCompleteAllTodos}
            buttonAdditionalStyles="disabled:bg-slate-300"
            isDisabled={todosList.length === 0}
          />
          <Button
            buttonColor="red"
            buttonType="button"
            buttonText="Delete All"
            handleClick={onToggleModalToDeleteAll}
            buttonAdditionalStyles="disabled:bg-slate-300"
            isDisabled={todosList.length === 0}
          />
        </div>
      </div>

      {modalStateDeleteItem && (
        <Modal
          onCloseModal={onToggleModalToDeleteItem}
          onDelete={removeSelectedTodo}
        >
          <ModalForItem />
        </Modal>
      )}
      {modalStateDeleteAll && (
        <Modal onCloseModal={onToggleModalToDeleteAll} onDelete={deleteAll}>
          <ModalForAll />
        </Modal>
      )}
    </div>
  );
}

export default App;
