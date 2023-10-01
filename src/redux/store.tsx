import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/UserReducers";




const reducer = combineReducers({
  user:userReducer,
  forgotPassword:forgotPasswordReducer,
  allUsers:allUsersReducer,
  profile:profileReducer,
  userDetails:userDetailsReducer
});



const middleware = [thunk];

const store = createStore(
  reducer,
//   initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;