// id(email) validation

const ids = [
  'example1234@example.com',
  'john.doe@example.co.uk',
  'jane_doe123@example.co.kr',
  'asd.asd@asd.asd.com',
  'asd-asd@asd.ads.as.sd',
];

const idRegex = new RegExp('[\\w-\\.]+@([\\w]+\\.)+[\\w.]{2,4}');

ids.forEach(id => {
  console.log(idRegex.test(id));
});

// password validation

const passwords = [];

const pwRegex = new RegExp(
  '[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?]+'
);

passwords.forEach(() => {});

// username validation

const usernames = [];

const usernameRegex = new RegExp('^[a-z0-9]+');

usernames.forEach(() => {});
