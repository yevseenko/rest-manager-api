import basic from './basic';

async function menuList(req, res) {
  const result = await basic.getMenuList();
  res.json(result);
}

export default {menuList};
