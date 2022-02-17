const bodyParser = require('body-parser');

const express = require('express')
const app = express()
const port = 3000


const productsRouter = require('./routes/ProductsCRUD')
const usersRouter = require('./routes/Users')
const invoiceRouter = require('./routes/Invoice')

app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('My Ecommerce Shop')
})

app.use('/products',productsRouter)
app.use('/users',usersRouter)
app.use('/invoice',invoiceRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
