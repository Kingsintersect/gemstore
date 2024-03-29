import { createAction, props } from "@ngrx/store";


export const SHOW_ALERT = '[APP] show alert';
export const EMPTY_ACTION = '[APP] empty';

export const showalert = createAction(SHOW_ALERT, props<{ message: string, resultType: string }>());
export const emptyaction = createAction(EMPTY_ACTION);