import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hallo!');
  res.end();
}).listen(process.env.PORT);
