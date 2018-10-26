import express from 'express';
import { MongoClient } from 'mongodb';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

require('./app/routes')(app, {});
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log('We are live on ' + port);
});
