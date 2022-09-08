const express = require('express');
const app = express()
const port = 3000

const startTime = new Date().getTime();
const minute = 1000 * 60;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/status', (req, res) => {
  const endTime = new Date().getTime();
  const status = endTime - startTime;
  res.json({ Status: Math.round(status / minute) })
})

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
