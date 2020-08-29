const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <div>
    <form>
      <input type="email" placeholder="email">
      <input type="password" placeholder="password">
      <input type="password" placeholder="confirm password">
      <button>Sign Up</button>
    </form>
  </div>
  `);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
