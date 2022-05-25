/* 
    Author: Rajat Rai
    This file contains all the routes defined for the application and protected routes
*/


// import jwt from 'jsonwebtoken'
const jwt    = require('jsonwebtoken')
// Initialize the app
const express = require('express')
const app = express()
// import dotenv for environment variables
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

//set secret
const secret = process.env.TOKEN_SECRET;
// use morgan to log requests to the console
app.set('secret', secret);

//For authentication of the user and generating the token for the user 
const authentication = (request, response) => {
    if(request.body.username==="rajat" && request.body.password==="0000"){        /*validating if username and password are correct
                                                                                    Username: rajat and password: 0000*/
                                                                                
        const token = jwt.sign({
          username: request.body.username
        }, app.get('secret'), {   //generating the token
          expiresIn: '24h'   //expires in 24 hours
        })
        return response.json({
          message: 'Authentication successful!',    //if username and password are correct
          token: token
        })
      }
  
      else{
        return response.status(400).json({
          message: 'Authentication failed!'   //if username and password are not correct
        })
      }
    }


// For protected routes
    const  ProtectedRoutes = express.Router();  //creating a router for protected routes
    app.use('/api', ProtectedRoutes);  //use the router for protected routes
    ProtectedRoutes.use((req, res, next) =>{
         
      const token = req.headers['token'];   //getting the token from the header
      if (!token) {
        return res.status(401).json({
          message: 'No token provided.'    //if no token is provided
        });
      }
      jwt.verify(token, app.get('secret'), (err, decoded) =>{   //verifying the token
        if (err) {
          return res.status(401).json({   //if token is not verified
            message: 'Invalid token.'    
          });
        }
        req.userId = decoded.id;  //if token is verified
        next();
      });
    });
    
// export the routes
module.exports = {
    authentication,
    ProtectedRoutes,
  }