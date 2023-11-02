import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {//generator function
    yield all([call(categoriesSaga), call(userSagas)]);
}