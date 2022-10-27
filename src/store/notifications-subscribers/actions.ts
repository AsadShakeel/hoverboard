// import { Initialized, Success } from '@abraham/remotedata';
// import { subscribeToDocument, Subscription } from '../../utils/firestore';

// let subscription: Subscription = new Initialized();

// export const unsubscribe = () => {
//   if (subscription instanceof Success) {
//     subscription.data();
//   }
// };

// export const fetchNotificationsSubscribers =
//   (token: string) => async (dispatch: Dispatch<NotificationsSubscribersActions>) => {
//     if (subscription instanceof Initialized) {
//       subscription = subscribeToDocument<{ id: string | undefined }>(
//         `notificationsSubscribers/${token}`,
//         () => dispatch({ type: FETCH_NOTIFICATIONS_SUBSCRIBERS }),
//         (payload) =>
//           dispatch({ type: FETCH_NOTIFICATIONS_SUBSCRIBERS_SUCCESS, payload: payload?.id || '' }),
//         (payload: Error) => dispatch({ type: FETCH_NOTIFICATIONS_SUBSCRIBERS_FAILURE, payload })
//       );
//     }
//   };
