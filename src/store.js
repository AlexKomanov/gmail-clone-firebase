import {configureStore} from "@reduxjs/toolkit";
import mailReducer from "./features/mailSlice.js"

const store =  configureStore({
    reducer: {
        mail: mailReducer
    }
})

export default store

