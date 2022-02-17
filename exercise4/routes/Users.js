const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const users = [
    { 
        id: uuidv4(),
        forename:"John",
        surname:"Johnson",
        email:"john.johnson@email.com"
    }
];
let customer = users[0].forename;
exports.customer = customer;

router.get('/', (req, res) => {
    res.json(users);
})

router.post('/', (req, res) => {
    console.log(req.body);

    users.push({ 
        id: uuidv4(),
        forename: req.body.forename,
        surname: req.body.surname,
        email: req.body.email
    });
    res.sendStatus(201);
})


module.exports = router