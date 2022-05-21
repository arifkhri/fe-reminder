import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
});

app.listen(8080, () =>
  console.log('Express server is running on http://localhost:8080')
);