// https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
// import { getFirestore } from 'firebase-admin/firestore';
// import * as functions from 'firebase-functions';

// const isScheduleEnabled = async (): Promise<boolean> => {
  // const doc = await getFirestore().collection('config').doc('schedule').get();

  // if (doc.exists) {
  //   return doc.data().enabled === 'true' || doc.data().enabled === true;
  // } else {
  //   functions.logger.error(
  //     'Schedule config is not set. Set the `config/schedule.enabled=true` Firestore value.'
  //   );
  //   return false;
  // }
// };

// export const sessionsWrite = functions.firestore
//   .document('sessions/{sessionId}')
//   .onWrite(() => generateAndSaveData());

// export const scheduleWrite = functions.firestore
//   .document('schedule/{scheduleId}')
//   .onWrite(async () => {
//     if (await isScheduleEnabled()) {
//       return generateAndSaveData();
//     }
//     return null;
//   });

// export const speakersWrite = functions.firestore
//   .document('speakers/{speakerId}')
//   .onWrite(async (change, context) => {
//     const changedSpeaker = change.after.exists
//       ? { id: context.params.speakerId, ...change.after.data() }
//       : null;
//     return generateAndSaveData(changedSpeaker);
//   });

// const fetchData = () => {
//   const sessionsPromise = getFirestore().collection('sessions').get();
//   const schedulePromise = getFirestore().collection('schedule').orderBy('date', 'desc').get();
//   const speakersPromise = getFirestore().collection('speakers').get();

//   return Promise.all([sessionsPromise, schedulePromise, speakersPromise]);
// };



