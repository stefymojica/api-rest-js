const express = require("express");

const bodyParser = require('body-parser')
  

const app = express();
const port = 3000
const users = [{
    id: 1,
    name: "Sebastian",
    lastname: "Guevara"
},
{
    id: 2,
    name: "Julieta",
    lastname: "Mojica"
}];

// create application/json parser
const jsonParser = bodyParser.json()
 

app.get('/users', (req, res) => {
    return res.send(users);
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.send(users.filter((user) => user.id === +req.params.id));
});

app.post('/users', jsonParser, (req, res) => {
    console.log(req.body);
    users.push({
        name: req.body.name,
        lastname: req.body.lastname
    });
    res.sendStatus(200);
});


app.listen(port, () => {
    console.log(`Start at http://localhost:${port}`)
  })