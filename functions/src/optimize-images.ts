// import * as functions from 'firebase-functions';
// import { storage } from 'firebase-functions';



// export const optimizeImages = storage.object().onFinalize((object) => {
//   const { contentType } = object;
//   // Exit if this is triggered on a file that is not an image.
//   if (!contentType.startsWith('image/')) {
//     functions.logger.log('This is not an image.');
//     return null;
//   }

//   return optimizeImage(object);
// });


