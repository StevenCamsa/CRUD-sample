const express=require('express')
const bodyparser=require('body-parser')
const jwt = require('jsonwebtoken');

const app=express()

const db=require('./query')

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}))

app.get('/items',db.getAllItem)
app.get('/item/:id',db.getItemById)
app.post('/additem',db.createItem)
app.put('/updateitem/:id',db.updateItem)
app.delete('/deleteitem/:id',db.deleteItem)
app.post('/token',db.userToken );

app.post('/login', verifyToken, db.loginUser);



//=============================================//
function verifyToken(req, res, next) {

    const auth = req.headers['authorization'];
    if (typeof auth !== 'undefined') {
        const bearer = auth.split(' ');
        const bearertoken = bearer[1];

        req.token = bearertoken;

        next();

    } else {
        res.sendStatus(403);
    }
};



app.listen(3000,() => console.log('listening to the port 3000'))