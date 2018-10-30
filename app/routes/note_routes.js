export default function (app, db) {
  app.post('/notes', (req, res) => {

    db.connect(function (err) {
      if (err) throw err;
      console.log('Connection up');

      db.query('SELECT * FROM persons', function (err, result) {
        if (err) throw err;
        console.log(result);
      });

      db.end(function (err) {
        if (err) throw err;
        console.log('Connection end');
      });
    });

    console.log(req.body);

    res.send('Hello');
  });
};
