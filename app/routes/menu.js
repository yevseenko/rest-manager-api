export default function (app, db) {

  console.log('Connection up');

  app.get('/menu', (req, res) => {

    db.query('SELECT * FROM menu', function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
    console.log(req.body);
  })

  app.post('/menu', (req, res) => {

    console.log('Post connected');

    const sql = `INSERT INTO menu (title, cost) VALUES ('${req.body.title}', ${req.body.cost})`;

    console.log(sql);

    db.query(sql, function (err) {
      if (err) throw err;
      console.log(req.body.title + ' ' + req.body.cost);
    });

    res.send('Done');
  });



};
