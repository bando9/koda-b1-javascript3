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
