export default function (app, db) {
  app.get('/staff', (req, res) => {
    db.query('SELECT * FROM staff', function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post('/staff', (req, res) => {
    //let sql = `INSERT INTO tables (title, cost) VALUES ('${req.body.title}', ${req.body.cost})`;
    //db.query(sql, function (err) {
      //if (err) throw err;
      res.send('Done.');
    //});
  });

  app.put('/staff', (req, res) => {
    console.log(req + res);
    res.send('Done.');
  });

  app.delete('/staff', (req, res) => {
    console.log(req + res);
    res.send('Done.')
  });
};
