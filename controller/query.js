
const pool = require('../database/db')
const jwt = require('jsonwebtoken');

//=================CREATE=======================//
const createItem = (request, response) => {
  const { entity, details } = request.body;

  pool.query('INSERT INTO testing2 ( entity, details) VALUES ($1, $2 )', [ entity, details], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`data is added`)
  })
}

//=================GET=ITEM======================//
const getItemById = (request, response) => {
  
  const id = request.params.id;
  
 console.log('Searched user id is '+id)
  pool.query('SELECT * FROM testing2 WHERE ID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//=================GET=ALL=ITEM=====================//
const getAllItem=(request,response) =>{

  pool.query('select * from testing2 ORDER BY ID asc', (error,results)=>
  {
    if(error)
    throw error
    response.status(200).json(results.rows)
  }
  )
}

//=================DELETE=======================//
const deleteItem= (request, response) => {
  
  const id = request.params.id;
  
 console.log('deleted id is '+id)

  pool.query('delete from testing2 where ID=$1',[id],(error,results)=>
  {
    if(error)
    throw error
    response.status(200).send(`data is deleted `)
  })
}

//=================UPDATE=======================//
const updateItem= (request, response) =>
{
  const id = request.params.id;
  const {entity,details} = request.body
  console.log('updated id is '+id)

  pool.query('update testing2 set entity=$1, details=$2 where ID=$3',[entity,details,id], (error,results)=>
  {
    if(error){
      throw error
    }
    response.status(200).send(`data is updated`)
  })
}
//=================TOKEN=======================//
const userToken = (request, response) =>
{
  const user = {
    id: 1,
    username: 'john',
    email: 'john@gmail.com'

};

jwt.sign({
    user
}, 'secretkey', {expiresIn:'30min'},(err, token) => {
    response.json({
        token
    });
});

}

//=================VERIFY=======================//
const loginUser = (request, response) => {
  jwt.verify(request.token, 'secretkey', (err, authData) =>{
      if(err){
          response.sendStatus(403)
      }else{
             response.json({
      message: "Logged IN",
      authData
  });
      }

  });

};

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


module.exports ={
createItem,
getItemById,
getAllItem,
deleteItem,
updateItem,
userToken,
loginUser,
verifyToken


}


