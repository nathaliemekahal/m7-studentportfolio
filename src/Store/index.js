import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import fetchingReducer from "../reducers/fetching";
import studentsReducer from "../reducers/students";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  students: {
    list: [],
  },
  fetching: {
    loading: true,
  },
};

const bigReducer = combineReducers({
  students: studentsReducer,
  fetching: fetchingReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
