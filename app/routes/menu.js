export default function (app, db) {
  app.get('/menu', (req, res) => {
    db.query('SELECT * FROM menu', function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post('/menu', (req, res) => {
    let sql = `INSERT INTO menu (title, cost) VALUES ('${req.body.title}', ${req.body.cost})`;
    db.query(sql, function (err) {
      if (err) throw err;
      res.send('Done.');
    });
  });

  app.put('/menu', (req, res) => {
    console.log(req + res);
    res.send('Done.');
  });

  app.delete('/menu', (req, res) => {
    console.log(req + res);
    res.send('Done.')
  });
};
