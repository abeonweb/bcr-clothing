import { legacy_createStore as createStore, applyMiddleware} from "redux"
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middleWares = [logger];

const composedMiddleware = applyMiddleware(...middleWares);

//root-reducer
export const store = createStore(rootReducer, undefined, composedMiddleware);