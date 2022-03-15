import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  guardarStateStorage,
  obtenerStateStorage,
} from "../../components/LocalStorage";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { weatherReducer } from "../reducers/weatherReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  climas: weatherReducer,
});

const storeState = obtenerStateStorage();

export const store = createStore(
  reducers,
  storeState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  guardarStateStorage({
    climas: store.getState().climas,
  });
});
