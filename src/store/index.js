import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import { authReducer, dataReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  restraunts: dataReducer,
});

const middlewares = [thunk, Logger];

export const store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
