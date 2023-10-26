import { CATEGORIES_ACTIONS } from "./categories.types";
import { createAction } from "../../utils/reducer/reducer.utils"
export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categoriesArray) 