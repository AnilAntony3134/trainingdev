import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// import reducers from ".";
import reducers from ".";


// export const store = configureStore({
//     reducer: {
//        amount : reducer
//     },
        
// })

export const store = createStore(reducers,{},applyMiddleware(thunk))