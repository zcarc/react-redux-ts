import { combineReducers } from "redux";
import counter from "./typesafe-actions/counter";
import todos from "./todos/index";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
