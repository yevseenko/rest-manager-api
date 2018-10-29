import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import routes from './app/routes';
import config from 'config';

const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(port, () => {
  console.log('We are live on ' + port);
});

routes(app, {});

const dbConfig = config.get('user.dbConfig');

const connection = mysql.createConnection(dbConfig);

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('Сonnected as id ' + connection.threadId);
});

connection.query('SELECT * from persons', function (_error, results, fields) {

  console.log(results);

  connection.end(function(err) {
    if (err) console.log(err);
  });

});
