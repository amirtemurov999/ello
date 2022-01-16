import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer, rootSaga } from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMidlleWare = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMidlleWare))
);

sagaMidlleWare.run(rootSaga);
