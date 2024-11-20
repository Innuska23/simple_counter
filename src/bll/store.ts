import { applyMiddleware, combineReducers, legacy_createStore, UnknownAction } from "redux";
import { thunk, ThunkDispatch } from "redux-thunk";
import { counterReducer } from "./counter-reduce";
import { loadState, saveState } from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppStoreType, unknown, UnknownAction>

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

// @ts-ignore
window.store = store
