const express = require('express');
const router = express.Router();
let customer = ('./Users');
let product = ('./ProductsCRUD');
const { v4: uuidv4 } = require('uuid');




const invoice = [
    { 
      id: uuidv4(),
      "customer" : customer[0],  // Ei toimi halutulla tavalla. Kuittiin voi edelleen lisätä käyttäjän ja tuotteen joita ei ole olemassa
      "product" : product[0],
      "sum":""  //Lopulliselle summalle ei ole oikeata funktiota, tulee ilmoittaa manuaalisesti
    }
  ];
  console.log(customer);
  router.get('/', (req, res) => {
    res.json(invoice);
  })
  
  router.get('/:id', (req, res) => {
    const foundIndex = invoice.findIndex(t => t.id === req.params.id);
  
    if(foundIndex === -1){
        res.sendStatus(404);
    } else {
        res.json(invoice[foundIndex]);
    }
  })

  router.post('/',(req, res) => {  
    console.log(req.body);

    invoice.push({
        id: uuidv4(),
        customer: req.body.customer,
        product: req.body.product,
        sum: req.body.sum
    });
    res.sendStatus(201);
})
  
  router.delete('/:invoiceId', (req, res) => {
    const foundIndex = invoice.findIndex(t => t.id == req.params.invoiceId);
  
    if(foundIndex === -1){
        res.sendStatus(404);
    } else{
        invoice.splice(foundIndex,1);
        res.sendStatus(202);
    }
  })

  module.exports = router