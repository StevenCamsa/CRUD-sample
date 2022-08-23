
const pool = require('./db')

const createUser = (request, response) => {
  const { entity, details } = request.body

  pool.query('INSERT INTO testing2 ( entity, details) VALUES ($1, $2 )', [ entity, details], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`data is added`)
  })
}

const getUserById = (request, response) => {
  
  const id = request.params.id;
  
 console.log('Searched user id is '+id)
  pool.query('SELECT * FROM testing2 WHERE ID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAllUsers=(request,response) =>{

  pool.query('select * from testing2 ORDER BY ID asc', (error,results)=>
  {
    if(error)
    throw error
    response.status(200).json(results.rows)
  }
  )
}


const deleteUser= (request, response) => {
  
  const id = request.params.id;
  
 console.log('deleted id is '+id)

  pool.query('delete from testing2 where ID=$1',[id],(error,results)=>
  {
    if(error)
    throw error
    response.status(200).send(`data is deleted `)
  })
}


const updateUser= (request, response) =>
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


module.exports ={
createUser,
getUserById,
getAllUsers,
deleteUser,
updateUser

}



