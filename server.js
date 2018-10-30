import express from 'express';
import bodyParser from 'body-parser';
import routes from './app/routes';
import db from './db'

const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, () => {
  routes(app, db);
  console.log('We are live on ' + port);
});
