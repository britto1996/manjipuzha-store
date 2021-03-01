import { applyMiddleware, combineReducers, createStore } from "redux";

import {
  userRegisterReducer,
  userLoginReducer,
  userListReducer,
  userDeleteReducer,
} from "./reducer/userReducers";
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from "./reducer/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({
  productCreate: productCreateReducer,
  productList: productListReducer,
  prodctUpdate: productUpdateReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
