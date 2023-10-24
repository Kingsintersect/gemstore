import { createAction, props } from "@ngrx/store";

export const createPaymentrequest = createAction(
    '[Payment] Create Payment Request',
    props<{ orderId: any }>()
)
export const createPaymentSuccess = createAction(
    '[Payment] Create Payment Success',
    props<{ payload: any }>()
)
export const createPaymentFailure = createAction(
    '[Payment] Create Payment Failure',
    props<{ error: any }>()
)