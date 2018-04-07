require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(database=>{
    app.set('db',database)
});

app.get('/api/getHouses',controller.getHouses);
app.post('/api/addHouse',controller.addHouse);
// app.put('/api/products/:id',controller.updateProduct);
app.delete('/api/deleteHouse/:id',controller.deleteHouse);


const PORT =  4200;


app.listen(PORT, ()=>{
    console.log(`You're listening to ${PORT}, The Salt, the dirtiest beats on the radio`)
})