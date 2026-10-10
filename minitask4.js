// TODO: fetch API
// * task: https://cdn.discordapp.com/attachments/1556291065412063232/1558067200546312222/image.png?ex=6aca16a8&is=6ac8c528&hm=d2050ce39f7d482d63812cf4cc44cbd2b548983e9321933474a9b816e574315d&

const url = "https://jsonplaceholder.typicode.com/users";

async function transformEmail() {
  try {
    const usersEmail = [];

    const response = await fetch(url);
    const data = await response.json();
    data.forEach((user) => {
      usersEmail.push(user.email);
    });

    const lowerCaseBuiltin = usersEmail.map((email) => {
      return email.toLowerCase();
    });

    const emailsLowerCase = [];

    let i = 0;
    do {
      const getEmail = usersEmail[i];
      const lowerCaseEmail = toLowerCaseManual(getEmail);
      emailsLowerCase.push(lowerCaseEmail);
      i++;
    } while (i < usersEmail.length);

    console.log("sblm diubah: ", usersEmail);
    console.log("using built-in:", lowerCaseBuiltin);
    console.log("setelah diubah (try-catch): ", emailsLowerCase);
  } catch (error) {
    console.error(error);
  }
}

transformEmail();

function toLowerCaseManual(string) {
  const newString = [];

  let i = 0;
  while (i < string.length) {
    const letter = string[i];
    let letterCode = letter.charCodeAt(0);

    if (letterCode >= 65 && letterCode <= 90) {
      const lowerLetterCode = (letterCode += 32);
      const backToLetter = String.fromCharCode(lowerLetterCode);
      newString.push(backToLetter);
    } else {
      newString.push(letter);
    }

    i++;
  }
  const lowerString = newString.join("");
  return lowerString;
}

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const emails = [];
    data.forEach((user) => {
      return emails.push(user.email);
    });

    const emailsLowerCase = [];

    for (let i = 0; i < emails.length; i++) {
      const email = emails[i];
      const emailLowerCase = toLowerCaseManual(email);
      emailsLowerCase.push(emailLowerCase);
    }

    console.log("setelah diubah (then-catch): ", emailsLowerCase);
  })
  .catch((err) => {
    return `Error: ${err}`;
  });
