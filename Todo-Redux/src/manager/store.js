import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../functions/Todo/todoSlice";

export const store=configureStore({
    reducer: todoSlice
})