const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());

const list = [
  { title: 'Lear React', done: false, important: false, id: 'ewew244234' },
  { title: 'Lear Redux', done: false, important: false, id: 'ewewsdfsfsfds' },
  { title: 'Lear Express', done: false, important: false, id: '34234asda' },
];

app
  .route('/api')
  .get(async (req, res) => {
    res.json(list);
  })
  .post(async (req, res) => {
    console.log(' req.body =>', req.body);
    list.push(req.body);
    res.json(list);
  })
  .delete(async (req, res) => {
    console.log(' req.body =>', req.body);
    list.filter((el) => el.id !== req.body.id);
    res.json(list);
  });

app.listen(8080, () => {
  console.log('I AM your Server!!!');
});
