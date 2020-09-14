const bcrypt = require("bcryptjs");

const saltRounds = 10;

bcrypt.genSalt(saltRounds, function (err, salt) {
  if (err) {
    throw err;
  } else {
    bcrypt.hash(process.argv[2], salt, function (err, hash) {
      if (err) {
        throw err;
      } else {
        console.log(hash);
        //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
      }
    });
  }
});
