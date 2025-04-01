import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResult, userResult] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(photoResult.body, userResult.firstName, userResult.lastName);
  } catch {
    console.error('Signup system offline');
  }
}
