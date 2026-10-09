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

function callJohn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John");
    }, 1500);
  });
}

async function printName() {
  try {
    const johnCalled = await callJohn();
    console.log(johnCalled);

    const edCalled = await callEd();
    console.log(edCalled);

    const janeCalled = await callJane();
    console.log(janeCalled);
  } catch (err) {
    console.log("Error: " + err);
  }
}

printName();
