const express=require('express')
const bodyparser=require('body-parser')

const app=express()

const db=require('./query')

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}))

app.get('/users',db.getAllUsers)
app.get('/user/:id',db.getUserById)
app.post('/addUser',db.createUser)
app.put('/updateUser/:id',db.updateUser)
app.delete('/deleteUser/:id',db.deleteUser)


app.listen(3000,() => console.log('listening to the port 3000'))