import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import config from 'config';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(router);

app.listen(config.server.port, config.server.host, function () {
  console.log(`We are live on ${config.server.host}:${config.server.port}`);
});

