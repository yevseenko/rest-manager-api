import db from '../db';

function getStaffList() {
  console.log('Try in basic----')
  try {
    console.log('try in basic');
    const staff = db.query('SELECT * FROM staff', function(err,result) {
      if (err) throw err;
      return result;
    });
    console.log(staff)
    return staff;
  } catch (err) {
    throw new Error(err);
  }
}

export default {getStaffList};
