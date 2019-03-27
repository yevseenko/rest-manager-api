export default function (app, db) {
  app.get('/tables', (req, res) => {
    db.query('SELECT * FROM tables', function (err, result) {
      if (err) throw err;
      res.send('Done');
    });
  });

  app.post('/tables', (req, res) => {
    //let sql = `INSERT INTO tables (title, cost) VALUES ('${req.body.title}', ${req.body.cost})`;
    //db.query(sql, function (err) {
      //if (err) throw err;
      res.send('Done.');
    //});
  });

  app.put('/tables', (req, res) => {
    console.log(req + res);
    res.send('Done.');
  });

  app.delete('/tables', (req, res) => {
    console.log(req + res);
    res.send('Done.')
  });
};
