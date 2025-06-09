import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer,
    // You can add more reducers here if needed
});