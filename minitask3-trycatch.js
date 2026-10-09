function callName(name, second) {
  const convertToMilisecond = second * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, convertToMilisecond);
  });
}

async function printName() {
  try {
    const johnCalled = await callName("John", 1.5);
    console.log(johnCalled);

    const edCalled = await callName("Ed", 2);
    console.log(edCalled);

    const janeCalled = await callName("Jane", 0.5);
    console.log(janeCalled);
  } catch (err) {
    console.log("Error: " + err);
  }
}

printName();
