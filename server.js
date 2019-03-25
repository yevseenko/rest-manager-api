import express from 'express';
import bodyParser from 'body-parser';
import routes from './app/routes';
import config from 'config';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

routes(app);

app.listen(config.server.port, config.server.host, function () {
  console.log(`We are live on ${config.server.host}:${config.server.port}`);
});
