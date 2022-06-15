import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from ".";

export const store = configureStore(reducers, {},applyMiddleware(thunk))