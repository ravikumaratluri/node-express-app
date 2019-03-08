const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome home!')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/zipcode', (req, res) => {
  res.send('64468')
})
app.get('/city', (req, res) => {
  res.send('Maryville')
})
app.get('/state', (req, res) => {
  res.send('Missouri')
})
app.get('/country', (req, res) => {
  res.send('United States of America')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

