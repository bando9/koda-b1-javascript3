/**
 * TODO : 20 built-in method
 * TODO : 5 built-in function
 * TODO : jelaskan
 * TODO : contoh penggunaan
 */

// * ===BUILT-IN FUNCTION===
// * isNAN
/** digunakan untuk mengecek apakah argumen di dalam function isNaN merupakan tipe number
 */
const numb = "2";
const checkNumber = isNaN(numb)
  ? `${numb} merupakan number`
  : `${numb} bukan number`;

console.log(checkNumber);

// * Number
/**
 * digunakan untuk mengubah tipe data lain ke tipe data Number
 */
const convertToNumber = Number(numb);
console.log("sebelum convert tipe data: " + typeof numb);
console.log("setelah convert tipe data: " + typeof convertToNumber);

// * ===BUILT-IN METHOD===

const persons = [
  "Adi",
  "Bando",
  "Calista",
  "Elang",
  "Damar",
  "Fernanda",
  "Galih besar",
];

const numbers = [1, 8, 6, 95, 34, 68, 90, 23];

// * (1) .push()
/**
 * digunakan untuk menambahkan data ke index paling belakang dari array
 */
const newPerson = "Hendra";
persons.push(newPerson);
console.log("new array: " + persons);

// * (2) .shift()
/**
 * digunakan untuk mengambil index pertama dari sebuah array. menghapus dan return index pertama tersebut.
 *
 *  */

const userMage = persons.shift();
console.log("mage user: " + userMage);

// * (3) .pop()
/**
 * digunakan untuk menghapus index terakhir ari sebuah arrays. method ini mengembalikan nilai dan menghapusnya dari array.
 */
const userJungler = persons.pop();
console.log(`user jungler: ${userJungler}`);

// * (4) .join()
/**
 * digunakan untuk menggabungkan semua index menjadi string baru. jika memiliki argumen, maka akan ditambahkan settiap kali method mengembalikan index dari arraynya.
 */
const newArray = [newPerson, userMage];
console.log(newArray);
console.log(`${newArray.join(" and ")} is ML player`);

// * (5) .forEach()
/**
 * menjalankan fungsi yang diberikan satu kali untuk setiap elemen array.
 * misal tiap value index mau ditambah 2.
 */
const numbersPlusTwo = [];
const plusTwo = numbers.forEach((numb) => {
  numbersPlusTwo.push(numb + 2);
});
console.log(numbersPlusTwo);

// * (6) .findLast()
/**
 * digunakan untuk mendapatkan index terakhir dari sebuah array.
 */

const lastPerson = persons.findLast((element) => {
  return element;
});
console.log("orang terakhir: " + lastPerson);

// * (7) .filter()
/**
 * digunakan untuk menyaring index dari kondisi yg ditentukan dalam methodnya.
 * misal ingin mendapatkan angka diatas 50
 *
 */
const greaterThen = numbers.filter((numb) => numb > 50);
console.log(greaterThen);

// * (8) .find()
/**
 * digunakan untuk mendapatkan sesuatu yang dicari. misal mencari data dalam array.
 */
const search = "Bando";
const foundPerson = persons.find((person) => person == search);
console.log(foundPerson + " ditemukan.");

// * (9) .splice()
/**
 * digunakan untuk menghapus dan/atau menambahkan data baru di spesifik index dalam array
 */
// const animals = ["Angsa", "Beruang", "Cicak", "Domba", "Elang"]
console.log("sebelum dihapus: " + persons);

const deletePersonOne = persons.splice(1, 1);
console.log("setelah dihapus: " + persons);

// * (10) .slice()
/**
 * digunakan utnuk mendapatkan data baru dari dalam sebuah array.
 * argument pertama untuk index mulai, dan argumen kedua untuk index terakhir data diambilnya
 */

const playerML = persons.slice(2, 4);
console.log(playerML);

// * (11) .toUpperCase()
/**
 * digunakan untuk mengubah string ke huruf kapital semua
 */
const upperCaseName = playerML[0].toUpperCase();
console.log(upperCaseName);

// * (12) .toLowerCase
/**
 * digunakan untuk mengubah string ke huruf kecil semua.
 */
const lowerCaseName = playerML[1].toLowerCase();
console.log(lowerCaseName);

// * (13) includes
/**
 * digunakan untuk mengecek apakah nilai argumen terdapat pada array. hanya mengembalikan nilai true atau false.
 */

const checkPlayer = playerML.includes("Bando");
console.log(checkPlayer);

// * (14) unshift
/**
 * digunakan untuk menambahkan data dimulai dari index awal pada array
 */
playerML.unshift("Mufti", "Afif");
console.log(playerML);

// * (15) map
/**
 * untuk looping dan mengembalikkan value dari hasil transofrmasi di dalam method
 */
const newNumber = numbers.map((numb) => {
  return numb * numb;
});
console.log(newNumber);

// * (16) trim
/**
 * digunakan untuk menghapus spasi di depan / belakang yg tidak digunakan
 */
const string = "               dakwnd kjanwdkj nawdkjwan dk  w wdn           ";
console.log("check sblm trim: " + string);
console.log("setelah trim: " + string.trim(" "));

// * (17) split
/**
 * digunakan untuk memecah string menjadi bentuk array dg pemisah yg ditentukan dalam method.
 */
const greetings = "Halo, selamat malam. smoga cerah malam menang";
console.log(greetings.split(" "));

// * (18) Math.round
/**
 * digunakan untuk mengubah bilangan desimal ke bilangan bulat terdekat
 */
const f = 3.14;
const ff = 3.56;
console.log(Math.round(f));
console.log(Math.round(ff));

// * (19) Math.random
/**
 * digunakan untuk mendapatkan angka random dari 0 hingga 1.
 */
const randomNum = Math.random() * 100;
console.log(Math.round(randomNum));

// * (20) endsWith
/**
 * digunakan untuk mengecek apakah value sama persis seperti kata/string terakhir dari sebuah variable string. value check bersifat case sensitive
 */
const checkIsMenang = greetings.endsWith("menang");
console.log(checkIsMenang);
