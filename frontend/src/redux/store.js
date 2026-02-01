import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REGISTER,
    REHYDRATE,
    PERSIST,
    PURGE,
    PAUSE,
 } from "redux-persist";

import storage from "redux-persist/lib/storage";
import applicationSlice from "./applicationSlice";
import companySlice from "./applicationSlice";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}



const rootReducer  = combineReducers({
    auth:authSlice,
    job:jobSlice,
    company:companySlice,
    application:applicationSlice
})

const persistedReducer = persistedReducer(persistConfig,rootReducer);


const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;