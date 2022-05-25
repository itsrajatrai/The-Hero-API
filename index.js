/* 
  This file contains all the routes for the application and protected routes and acts as a controller of the application
  Author: Rajat Rai
*/
 
// Important modules
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./DbQueries')
const morgan = require('morgan')
const au=require('./auth')


// Initialize the app
const app = express()
app.use(morgan('dev'));
// Set up the port
const port = 8000
// Set up the body parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// Set up the routes

// Route for getting the main page
app.get('/', (request, response) => {
    response.json({ info: '| This is the Problem 01 of Habuild Backend Assignment | Author: Rajat Rai ' })
  })
  
  

// Route for getting the authentication done
  app.post('/auth',au.authentication)


// For protected routes
 const pr=au.ProtectedRoutes

// Route for getting the ranking of topics
  app.get('/ranking',pr,db.getranking)

// Route for updating the ranking of topics
  app.put('/update',pr,db.updaterank)

// Start the server
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
