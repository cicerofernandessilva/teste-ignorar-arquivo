//teste do bycrypt

// var bcrypt = require("bcryptjs");
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0//", salt);

// const passworddb = hash;
// console.log(passworddb);

// // Load hash from your password DB.
// console.log(bcrypt.compareSync("B4c0//", passworddb)); // true
// console.log(bcrypt.compareSync("not_bacon", passworddb)); // false

// const password = "B4c0//";

// console.log(bcrypt.compareSync(password, passworddb)); // true

//outro modo

var bcrypt = require("bcryptjs");
var salt = bcrypt.genSalt(10);
var hash = bcrypt.hash("B4c0//", salt);

const passworddb = hash;
console.log(passworddb);

// Load hash from your password DB.
console.log(bcrypt.compare("B4c0//", passworddb)); // true
console.log(bcrypt.compare("not_bacon", passworddb)); // false

const password = "B4c0//";

console.log(bcrypt.compare(password, passworddb)); // true
