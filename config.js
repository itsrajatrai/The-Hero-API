/* 
    Author: Rajat Rai
    This file is for generation of secret code for jwt token
    The secret code is stored in an environment variable called TOKEN_SECRET 
*/

var secret= require('crypto').randomBytes(64).toString('hex')
console.log(secret);