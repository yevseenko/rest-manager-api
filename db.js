import config from 'config';
import mysql from 'mysql';

const dbConfig = config.get('user.dbConfig');
export default mysql.createConnection(dbConfig);
