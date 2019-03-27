import db from '../db';

function getStaffList() {
  try {
    const staff = db.query('SELECT * FROM staff');
    return staff;
  } catch (err) {
    throw new Error(err);
  }
}

function addItemToList(req) {
  try {
    const query = db.query(
      'INSERT INTO staff (name, lastName, age) VALUES (?, ?, ?)',
      [req.body.name, req.body.lastName, req.body.age]
      );
    console.log('query active');
    return 'Done';
  } catch (err) {
    if (err) throw new Error(err);
  }
}

export default {getStaffList, addItemToList};
