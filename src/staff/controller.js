import basic from './basic';

async function hello(req, res) {
  const result = await back();
  res.send(result);
}

function back() {
  return 'Hello, im async func';
}

async function staffList(req, res) {
  const result = await basic.getStaffList();
  res.json(result);
}

async function editStaffList(req, res) {
  const result = await basic.addItemToList(req);
  res.send(result);
}

export default {
  hello,
  staffList,
  editStaffList
};
