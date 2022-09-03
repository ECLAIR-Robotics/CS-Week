import { configureStore } from '@reduxjs/toolkit';
import { googleSlice } from "views/reduxFiles/reduxGoogle.js";

export default configureStore({
    reducer: googleSlice
});