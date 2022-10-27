// import { doc, setDoc } from 'firebase/firestore';
import { Dispatch } from 'redux';
// import { db } from '../../firebase';
import {
  ADD_POTENTIAL_PARTNER,
  ADD_POTENTIAL_PARTNER_FAILURE,
  ADD_POTENTIAL_PARTNER_SUCCESS,
  PotentialPartnerActions,
} from './types';

// const setPartner = async (data: DialogData) => {

//   // await setDoc(doc(db, 'potentialPartners', id), partner);
// };

export const addPotentialPartner =
  () => async (dispatch: Dispatch<PotentialPartnerActions>) => {
    dispatch({ type: ADD_POTENTIAL_PARTNER });

    try {
      // await setPartner(data);

      dispatch({ type: ADD_POTENTIAL_PARTNER_SUCCESS });
    } catch (error) {
      dispatch({
        type: ADD_POTENTIAL_PARTNER_FAILURE,
        payload: error as Error,
      });
    }
  };
