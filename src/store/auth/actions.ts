
import { store } from '..';

import {
  AUTH,
  AuthActions, AUTH_SUCCESS } from './types';

export const signIn = async () => {
  store.dispatch<AuthActions>({ type: AUTH });
  // const provider = getFederatedProvider(providerId);

  try {
    // await signInWithPopup(auth, provider);
    store.dispatch<AuthActions>({ type: AUTH_SUCCESS, payload: true });
  } catch (error) {
    // if (error instanceof FirebaseError) {
      // setAuthFailure(error as AuthError, providerId);
    // } else {
      // throw error;
    // }
  }
};


