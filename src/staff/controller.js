import basic from './basic';

async function hello(req, res) {
  const result = await back(); 
  res.json(result);
}

function back() {
  return 'Hello, im async func';
}

function staffList (req, res) {
  console.log('staffList entered');
  const result = basic.getStaffList();
  console.log(result)
  res.send(result);
}

export default {hello, staffList};

