const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const pgp = require('pg-promise')();
const db = pgp({
  database: 'contact'
});
const app = express();
app.use(bodyparser.json());

app.use(cors());

app.get('/api/contacts',(req, res, next) =>{
  db.any('select * from contact')
  .then(contacts => res.json(contacts))
  .catch(next);
});

app.post('/api/contacts',(req,res)=>{
  db.none(`insert into contact values(default, $1, $2, $3, $4, $5)`,[req.body.name, req.body.phone, req.body.email, req.body.type, req.body.favorite])
  .then(row=>res.json(row));
});

app.delete('/api/contacts/:id',(req,res,next)=>{
  db.none(`delete from contact where contact.id = $1`,[req.params.id])
  .then(row=>res.json('deleted'));
});

app.put('/api/contacts/:id',(req,res,next)=>{
  db.one(`update contact set name = $1, phone = $2, email = $3, type = $4, favorite = $5 where id = $6 returning *`,[req.body.name, req.body.phone, req.body.email, req.body.type, req.body.favorite, req.params.id])
  .then(result=>res.json(result));
});


app.listen(3000,()=> console.log('Listening on port 3000.'));
