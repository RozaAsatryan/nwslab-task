import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/allPhotos";

const rootReducer = combineReducers({
  photos: categoryReducer,
});

export default rootReducer;
