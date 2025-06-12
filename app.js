const express = require('express');
const app = express();
const PORT = 3000;

const { getWithPromise, getWithAsync } = require('./controller');

// Route to test Promise
app.get('/promise', getWithPromise);

// Route to test Async/Await
app.get('/async', getWithAsync);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
