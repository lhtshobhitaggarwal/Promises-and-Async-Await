const https = require('https');

// METHOD 1: Using Promise
function getWithPromise(req, res) {
  const apiURL = 'https://jsonplaceholder.typicode.com/posts';

  // Create a promise to handle the API call
  const fetchData = new Promise((resolve, reject) => {
    https.get(apiURL, (response) => {
      let data = '';

      // Collect chunks of data
      response.on('data', (chunk) => {
        data += chunk;
      });

      // When done, resolve the promise
      response.on('end', () => {
        resolve(JSON.parse(data));
      });

    }).on('error', (err) => {
      reject(err);
    });
  });

  // Use .then and .catch
  fetchData
    .then((result) => {
      res.send({
        message: 'Data fetched using Promise',
        data: result
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Error using Promise',
        error: error.message
      });
    });
}

// METHOD 2: Using Async/Await
async function getWithAsync(req, res) {
  const apiURL = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const result = await new Promise((resolve, reject) => {
      https.get(apiURL, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          resolve(JSON.parse(data));
        });

      }).on('error', (err) => {
        reject(err);
      });
    });

    res.send({
      message: 'Data fetched using Async/Await',
      data: result
    });

  } catch (error) {
    res.status(500).send({
      message: 'Error using Async/Await',
      error: error.message
    });
  }
}

module.exports = { getWithPromise, getWithAsync };