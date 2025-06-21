import express from 'express';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const PORT = 3000;

// Use routes
app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
