const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello hest!')
})

app.get('/hest', (req, res) => {
  res.send('Hello hest2!')
})

app.get('/api/hest', (req, res) => {
  res.json({
    typehest: ["heste", "hestemanden1", "hestemanden 2"]
  });
});

const heste = [];
app.post('/api/hest', (req, res) => {
  const nyHest = req.body;
  heste.push(nyHest);
  res.status(201).json({ message: "Ny hest tilføjet!", data: nyHest });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})