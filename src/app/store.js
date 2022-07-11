// importing the configurestore function from redux
import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

// connexting the store to the cryptoApi
export default configureStore({
    reducer : {[cryptoApi.reducerPath] : cryptoApi.reducer,
    },
});