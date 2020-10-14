const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'))

app.post('/', (req, res) => {
      const token = 'example-token';
      const email = req.body.email;
      const pass = req.body.password;

      if (email === 'test@example.com' && pass === 'qwerty1A') {
        res.status(200).json(token)
      } else {
        res.status(404).json({ error: 'Wrong password or email' });
      }
});

app.listen(port, function () { 
  console.log('Server started');
});
