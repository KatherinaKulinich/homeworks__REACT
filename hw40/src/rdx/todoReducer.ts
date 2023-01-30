import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TodosState {
  listTodos: Todo[];
  selectTodo: Todo
}



const initialState: TodosState = {
  listTodos: [],
  selectTodo: {
    id: '',
    text: '',
    isCompleted: true
  },
};



const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.listTodos.push({
        id: String(Date.now()),
        text: action.payload,
        isCompleted: false,
      });
    },

    toggleTodo(state, action: PayloadAction<string>) {
      const selectedTodo = state.listTodos.find(
        (todo) => todo.id === action.payload
      );
      
      if (selectedTodo) {
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
      }
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.listTodos = state.listTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    completeAllTodos(state) {
      state.listTodos.map((todo) => (todo.isCompleted = true));
    },

    showTodoById(state, action: PayloadAction<string>) {
      const todoToDelete = state.listTodos.find((todo) => todo.id === action.payload
      );

      if (todoToDelete) {
        state.selectTodo = todoToDelete
      }
    },

    deleteAllTodos(state) {
        state.listTodos = []
    }
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  completeAllTodos,
  showTodoById,
  deleteAllTodos
} = todoSlice.actions;

export default todoSlice.reducer;
