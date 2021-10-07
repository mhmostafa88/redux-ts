// this file is used to create a single reducer function
//The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
//The resulting reducer calls every child reducer, and gathers their results into a single state object
// The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;

// the type that describes the type of information inside of our redux store
export type RootState = ReturnType<typeof reducers>;