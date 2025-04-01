export default function getResponseFromAPI() {
  const response = new Promise((resolve, reject) => {
    resolve();
    setTimeout(() => {
      reject();
    }, 2000);
  });
  return response;
}
