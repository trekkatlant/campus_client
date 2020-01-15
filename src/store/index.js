import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer Functions;
// import counter from "./utilities/counter";
import allCampus from './utilities/campuses';
import allStudents from './utilities/allStudents';
const rootReducer = combineReducers({allCampus, allStudents});
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(rootReducer, middleware);

// Export our store by default, which will be provided to and injected within our entire application/component tree;
export default store;