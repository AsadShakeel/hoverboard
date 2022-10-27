// import { Initialized, Success } from '@abraham/remotedata';
// import { subscribeToDocument, Subscription } from '../../utils/firestore';

// let subscription: Subscription = new Initialized();

// export const unsubscribe = () => {
//   if (subscription instanceof Success) {
//     subscription.data();
//   }
// };

// export const fetchNotificationsUsers =
//   (uid: string) => async (dispatch: Dispatch<NotificationsUsersActions>) => {
//     if (subscription instanceof Initialized) {
//       subscription = subscribeToDocument<UserTokens>(
//         `notificationsUsers/${uid}`,
//         () => dispatch({ type: FETCH_NOTIFICATIONS_USERS }),
//         (payload) =>
//           dispatch({
//             type: FETCH_NOTIFICATIONS_USERS_SUCCESS,
//             payload: payload || { id: uid, tokens: {} },
//           }),
//         (payload: Error) => dispatch({ type: FETCH_NOTIFICATIONS_USERS_FAILURE, payload })
//       );
//     }
//   };
