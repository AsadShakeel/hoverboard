// import { Success } from '@abraham/remotedata';
// import { doc, setDoc } from 'firebase/firestore';
import { Dispatch } from 'redux';
import { store } from '..';
// import { db } from '../../firebase';
import { notifications } from '../../utils/data';
import { queueSnackbar } from '../snackbars';
import {
  UpdateNotificationsUsersActions,
  UPDATE_NOTIFICATION_USERS,
  UPDATE_NOTIFICATION_USERS_FAILURE,
  UPDATE_NOTIFICATION_USERS_SUCCESS,
} from './types';


export const updateNotificationsUsers =
  (uid: string) =>
  async (dispatch: Dispatch<UpdateNotificationsUsersActions>) => {
    dispatch({
      type: UPDATE_NOTIFICATION_USERS,
    });

    try {
      // const { notificationsUsers } = getState();
      // const tokens = notificationsUsers instanceof Success ? notificationsUsers.data.tokens : {};

      // await setNotificationsUsersDoc(uid, { tokens: { ...tokens, [token]: true } });

      dispatch({
        type: UPDATE_NOTIFICATION_USERS_SUCCESS,
        payload: uid,
      });
      store.dispatch(queueSnackbar(notifications.myScheduleEnabled));
    } catch (error) {
      dispatch({
        type: UPDATE_NOTIFICATION_USERS_FAILURE,
        payload: error as Error,
      });
    }
  };

export const removeNotificationsUsers =
  (uid: string) =>
  async (dispatch: Dispatch<UpdateNotificationsUsersActions>) => {
    dispatch({
      type: UPDATE_NOTIFICATION_USERS,
    });

    try {
      // const { notificationsUsers } = getState();
      // const oldTokens = notificationsUsers instanceof Success ? notificationsUsers.data.tokens : {};
      // const tokens = { ...oldTokens };
      // delete tokens[token];
      // await setNotificationsUsersDoc(uid, { tokens });

      dispatch({
        type: UPDATE_NOTIFICATION_USERS_SUCCESS,
        payload: uid,
      });
      store.dispatch(queueSnackbar(notifications.myScheduleDisabled));
    } catch (error) {
      dispatch({
        type: UPDATE_NOTIFICATION_USERS_FAILURE,
        payload: error as Error,
      });
    }
  };
