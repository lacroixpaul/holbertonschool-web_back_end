import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResult, createUserResult]) => {
      console.log(uploadPhotoResult.body, createUserResult.firstName, createUserResult.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
