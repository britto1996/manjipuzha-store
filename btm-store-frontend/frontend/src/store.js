import { applyMiddleware, combineReducers, createStore } from "redux";
import { userRegisterReducer, userLoginReducer } from "./reducer/userReducers";
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
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productReview: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
