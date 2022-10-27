// import { Failure, Initialized, Pending, RemoteData, Success } from '@abraham/remotedata';
import { createSlice } from '@reduxjs/toolkit';
// import {
//   collection,
//   collectionGroup,
//   onSnapshot,
//   orderBy,
//   query,
//   Unsubscribe,
// } from 'firebase/firestore';
// import { db } from '../../firebase';
// import { dataWithParentId, mergeDataAndId } from '../../utils/firestore';

// export type PartnerGroupsState = RemoteData<Error, PartnerGroup[]>;

export interface PartnersState {
  // groups: RemoteData<Error, PartnerGroupWithoutItems[]>;
  // partners: RemoteData<Error, Partner[]>;
  // partnersSubscription: RemoteData<Error, Unsubscribe>;
  // groupsSubscription: RemoteData<Error, Unsubscribe>;
}

export const initialState = {
  // groups: new Initialized(),
  // partners: new Initialized(),
  // partnersSubscription: new Initialized(),
  // groupsSubscription: new Initialized(),
} as PartnersState;



const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    
  },
});

// const selectPartners = (state: RootState) => state.partners.partners;
// const selectGroups = (state: RootState) => state.partners.groups;

// export const selectPartnerGroups = createSelector(
  // selectGroups,
  // selectPartners,
  /////(groups: PartnersState['groups'], partners: PartnersState['partners']): PartnerGroupsState => {
  //   if (groups instanceof Initialized || partners instanceof Initialized) {
  //     store.dispatch(subscribe());
  //     return new Pending();
  //   }

  //   if (groups instanceof Success && partners instanceof Success) {
  //     const partnerGroups = groups.data.map((group) => {
  //       return {
  //         ...group,
  //         items: partners.data.filter((partner: Partner) => partner.parentId === group.id),
  //       };
  //     });
  //     return new Success(partnerGroups);
  //   }

  //   if (groups instanceof Failure) {
  //     return groups;
  //   }

  //   if (partners instanceof Failure) {
  //     return partners;
  //   }

  //   return new Pending();
  // }
// );

// const {
// } = partnersSlice.actions;

// export { subscribe, unsubscribe };
export default partnersSlice.reducer;
