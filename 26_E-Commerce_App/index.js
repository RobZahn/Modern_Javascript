const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['akjf3kjpoewf54oijki']
  })
);

app.get('/signup', (req, res) => {
  res.send(`
  <div>
    ${req.session.userID}
    <form method="POST">
      <input type="email" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
      <input type="password" name="passwordConfirmation" placeholder="confirm password">
      <button>Sign Up</button>
    </form>
  </div>
  `);
});

app.post('/signup', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send('Email in use');
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords must match');
  }

  const user = await usersRepo.create({ email, password });

  req.session.userID = user.id;

  res.send('Account created!');
});

app.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out');
});

app.get('/signin', (req, res) => {
  res.send(`
  <div>
    <form method="POST">
      <input type="email" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
      <button>Sign In</button>
    </form>
  </div>
  `);
});

app.post('/signin', async (req, res) => {});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
