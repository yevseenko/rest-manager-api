export default function (app, db) {
  app.get('/staff', (req, res) => {
    db.query('SELECT * FROM staff', function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post('/staff', (req, res) => {
    let sql = `INSERT INTO staff (name, lastName, age) VALUES ('${req.body.name}', '${req.body.lastName}', ${req.body.age})`;
    db.query(sql, function (err) {
      if (err) throw err;
      res.send('Done with ' + req.body);
    });
  });

  app.put('/staff/:id', (req, res) => {
    console.log(req + res);
    res.send('Done.');
  });

  app.delete('/staff/:id', (req, res) => {
    console.log(req + res);
    res.send('Done.')
  });
};
