const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'))

app.get('/todos', (req, res) => {
      const results = [];
      if (results && results.length === 0) {
          res.status(404).json({ error: 'Todos not found' });
      } else {
          res.status(200).json(results);
      }
});

app.listen(port, function () { 
  console.log('Server started');
});
