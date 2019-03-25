import db from '../../db';

export default function (app) {
  
  app.get('/staff', (req, res) => {
    db.query('SELECT * FROM staff', function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post('/staff', (req, res) => {
    db.query(
      'INSERT INTO staff (name, lastName, age) VALUES (?, ?, ?)',
      [req.body.name, req.body.lastName, req.body.age],
      function (err) {
        if (err) console.log(err);
        res.send(`Done with ${req.body.name}`);
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
