import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import routes from './app/routes';

const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log('We are live on ' + port);
});

routes(app, {});
