// TODO: https://cdn.discordapp.com/attachments/1556291065412063232/1558054045414068234/image.png?ex=6aca0a67&is=6ac8b8e7&hm=8a7389ced2bdbf66a9c424527952c4ebac9e38b80b97fd9da4ff74e8a6427a98&
// promise, setTimeout = jelaskan alurnya di README

function printName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("John");
    }, 1500);
  });
}

function callEd() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ed");
    }, 2000);
  });
}

function callJane() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Jane");
    }, 500);
  });
}

printName()
  .then((result) => {
    console.log("antiran 1: " + result);
    return callEd();
  })
  .then((result) => {
    console.log("antiran 2: " + result);
    return callJane();
  })
  .then((result) => {
    console.log("antiran 3: " + result);
  })
  .catch((err) => {
    console.error(err);
  });
