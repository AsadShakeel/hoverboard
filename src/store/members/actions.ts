// import { subscribeToCollectionGroup, Subscription } from '../../utils/firestore';

// let subscription: Subscription = new Initialized();

// export const unsubscribe = () => {
//   if (subscription instanceof Success) {
//     subscription.data();
//   }
// };

// export const fetchMembers = async (dispatch: Dispatch<MembersActions>) => {
//   if (subscription instanceof Initialized) {
//     subscription = subscribeToCollectionGroup(
//       'members',
//       () => dispatch({ type: FETCH_MEMBERS }),
//       (payload: Member[]) => dispatch({ type: FETCH_MEMBERS_SUCCESS, payload }),
//       (payload: Error) => dispatch({ type: FETCH_MEMBERS_FAILURE, payload })
//     );
//   }
// };
