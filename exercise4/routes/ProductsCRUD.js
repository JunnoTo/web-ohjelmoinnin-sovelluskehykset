const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const products = [
    {
    id: uuidv4(),
    name:"Lighter",
    manufacturer:"BiC",
    category:"Outdoor",
    description:"A green lighter",
    price: 1
    }
];
let product = products[0].name;
exports.product = product;

function sum(a,b){
    return a.price * b.price;
}
module.exports = {sum}




router.get('/', (req, res) => {    //SHOW ALL PRODUCTS
    res.json(products);
})

router.get('/:productId', (req, res) => { //SHOW PRODUCT BY ID

    let foundIndex = -1;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == req.params.productId){
            foundIndex = i;
            break;
        }
    }
    if(foundIndex === -1){
        res.sendStatus(404);
    }else{
        res.json(products[foundIndex]);
    }
    res.sendStatus(200);
})

router.delete('/:productId', (req, res) => {  // DELETE PRODUCT

    let foundIndex = products.findIndex(t => t.id == req.params.productId);

    if(foundIndex === -1){
        res.sendStatus(404);
    }else{
        products.splice(foundIndex, 1);
        res.sendStatus(202);
    }

})

router.post('/',(req, res) => {    // CREATE PRODUCT
    console.log(req.body);

    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price
    });
    res.sendStatus(201);
})

router.put('/:productId', (req, res) =>{ //UPDATE PRODUCT
    let foundProduct = products.find(t => t.id == req.params.productId);
    if(foundProduct){
        foundProduct.name = req.body.name;
        foundProduct.manufacturer = req.body.manufacturer;
        foundProduct.category = req.body.category;
        foundProduct.description = req.body.description;
        foundProduct.price = req.body.price;
        res.sendStatus(202);
    }else{
        res.sendStatus(404);
    }

})

module.exports = router