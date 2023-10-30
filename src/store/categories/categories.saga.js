import { takeLatest, all, call, put } from 'redux-saga/effects'// side effect generators
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './categories.action';
import { CATEGORIES_ACTIONS_TYPES } from './categories.types';


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch(err) {
        yield put(fetchCategoriesFailed(err));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync )
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}