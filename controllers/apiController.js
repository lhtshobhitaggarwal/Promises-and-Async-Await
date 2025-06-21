import https from 'https';

// METHOD 1: Using Promise
function getWithPromise(req, res) {
  const apiURL = 'https://jsonplaceholder.typicode.com/posts';

  const fetchData = new Promise((resolve, reject) => {
    https.get(apiURL, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => resolve(JSON.parse(data)));
    }).on('error', (err) => reject(err));
  });

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
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    res.send({
      message: 'Data fetched using Async/Await',
      data,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error using Async/Await',
      error: error.message,
    });
  }
}

export { getWithPromise, getWithAsync };
