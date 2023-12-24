import {configureStore} from "@reduxjs/toolkit";
import mailReducer from "features/mailSlice.js"

export default configureStore({
    reducer: {
        mail: mailReducer
    }
})

