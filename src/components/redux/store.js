import { configureStore } from "@reduxjs/toolkit";

import variables from "./Slices/begin_slice";

const store = configureStore({
    reducer: {
        Variables: variables,
    },
});

export default store;