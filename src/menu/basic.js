import db from '../db';

function getMenuList() {
  try {
    const menu = db.query('SELECT * FROM menu');
    return menu;
  } catch (err) {
    throw new Error(err);
  }
}

function addItemToMenu(req) {
  console.log('ps');
}

export default {getMenuList};
