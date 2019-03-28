import db from '../db';

async function getStaffList() {
  try {
    const staff = await db.query('SELECT * FROM staff');
    return staff;
  } catch (err) {
    throw new Error(err);
  }
}

async function addItemToList(req) {
  try {
    const result = await db.query(
      'INSERT INTO staff (name, lastName, age) VALUES (?, ?, ?)',
      [req.body.name, req.body.lastName, req.body.age]
      );
    return `Done with ${result}`;
  } catch (err) {
    if (err) throw new Error(err);
  }
}

export default {getStaffList, addItemToList};
