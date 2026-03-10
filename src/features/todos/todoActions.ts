import { createAction } from "@reduxjs/toolkit";

// lo que esta adentro del parametro es el tipo de la accion
export const addTodo = createAction<string>("todos/add");
export const removeTodo = createAction<number>("todos/remove");