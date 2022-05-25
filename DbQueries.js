/* 
    Author: Rajat Rai
    This file contains all the routes defined the database queries for the application 
*/

//initializing the database pool
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',    
  host: 'localhost',
  database: 'habuild',  //database name
  password: '0000',   //password for the database
  port: 5432,
})

// For getting the rank of the topic
const getranking = (request, response) => {
  pool.query('SELECT name, topic_id, rank FROM topics t, ratings r WHERE t.id=r.topic_id  ORDER BY r.rank DESC;', (error, results) => {   //query for getting the rank of the topic
    if (error) {  //error if query fails
      throw error
    }
    response.status(200).json(results.rows)  //sending the results
  })
}

// For updating the rank of the topic
const updaterank = (request, response) => {  //query for updating the rank of the topic
  const { id } = request.body;  //getting the id of the topic
  const { rank } = request.body  //getting the rank of the topic

  //validating if id is empty or not
  if(!id){   
    return response.status(400).json({   
          message: 'id is required'  
      })}

  //validating if rank is more than 100 and less than 0 
  if(rank<0 || rank>100){
    return response.status(400).json({
          message: 'rank should be between 0 and 100'   //if rank is not in the range
      })}
  else(
    

  pool.query('SELECT * FROM topics WHERE id=$1', [id], (error, results) => {
    if (error) {
      throw error
    }
    if(results.rowCount==0){
      return response.status(400).json({
          message: 'id does not exist'                     //error if id doesn't exist
      })}
    else{     
      
      // Updation of rank if id exists

      pool.query('UPDATE ratings SET rank=$1 WHERE topic_id=$2', [rank, id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json({
          message: 'rank updated successfully for id: ' + id
        })
  
      })
} 
})
  )
}

// exporting the routes
module.exports = {
  getranking,
  updaterank,
}