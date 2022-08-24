const express=require('express')
const bodyparser=require('body-parser')


const app=express()



app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}))

app.use('/', require('./routes/routes'));

//=============================================//



app.listen(3000,() => console.log('listening to the port 3000'))