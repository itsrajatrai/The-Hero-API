# THE HERO API ( Node Js assignment with PostgreSql )

## Content of Readme File
- Introduction
- Dependencies
- File Details
- Route/endpoints details
- Database Details


## Introduction
 The task was to create a Node Js assignment with PostgreSql database, which could fetch and update data. The access to the request and response must be protected using JWT authentication.

## Dependencies needed
<pre>
dependencies": {
    "body-parser": "^1.20.0",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.10.0",
    "pg": "^8.7.3" 
</pre>
### Can be installed using npm or yarn
<pre>
yarn install
or
npm install
</pre>

## File Details
<pre>
index.js: This is the main file. It caontins all the routes calls.

auth.js: This file contains all the authentication mechanism and protected routes request.

DbQueries.js: This file contains the database request handling.

config.js: This file is to generate the secret token for storing in .env file.
</pre>

## Route/endpoints details

### Authentication ( app.post('/auth',au.authentication) )

Request URL: http://localhost:8000/auth

**Status: 400 Bad Request ( When authetication failed due to invalid credientials )**

Request Body :
<pre>
{
    "username":"rajat",
    "password":"0004"
}
</pre>
Response Body:
<pre>
{
    "message": "Authentication failed!"
}
</pre>

**Status: 200 OK ( When authetication succeeds )**
Request Body :
<pre>
{
    "username":"rajat",
    "password":"0000"
}
</pre>
Response Body:
<pre>
{
    "message": "Authentication successful!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhamF0IiwiaWF0IjoxNjUzNDk0NjYyLCJleHAiOjE2NTM1ODEwNjJ9.VRj61G2hQL9MK-Ry0yUkcl8cnzfwUHTkA4LeGc92irA"

}
</pre>

### To Fetch Topics and Rankings ( app.get('/ranking',pr,db.getranking) )

Request URL: http://localhost:8000/ranking?

**Status: 401 Unauthorised ( When token is expired / not varified )**

Request Body :
<pre>
NA
</pre>
Response Body:
<pre>
{
    "message": "No token provided."
}
</pre>

**Status: 200 OK ( When authetication succeeds and Ranking is Displayed )**

Request URL: http://localhost:8000/ranking?token

Request Body :
<pre>
NA
</pre>
Response Body:
<pre>
[
    {
        "name": "The Kashmir Files",
        "topic_id": 3,
        "rank": 98
    },
    {
        "name": "Harry Potter",
        "topic_id": 5,
        "rank": 90
    },
    {
        "name": "KGF2",
        "topic_id": 1,
        "rank": 87
    },
    {
        "name": "Dr. Strange",
        "topic_id": 7,
        "rank": 87
    },
    {
        "name": "KGF",
        "topic_id": 6,
        "rank": 80
    },
    {
        "name": "RRR",
        "topic_id": 2,
        "rank": 45
    },
    {
        "name": "Singham",
        "topic_id": 4,
        "rank": 44
    }
]
</pre>


### To Update ( app.put('/update',pr,db.updaterank) )

Request URL: http://localhost:8000/update

**Status: 401 Unauthorised ( When token is expired / not varified )**

Request Body :
<pre>
NA
</pre>
Response Body:
<pre>
{
    "message": "No token provided."
}
</pre>

**Status: 200 OK ( When ranking is updated )**

Request Body :
<pre>
{
    "id":3,
    "rank":98
}
</pre>
Response Body:
<pre>
{
    "message": "rank updated successfully for id: 3"
}
</pre>

**Status: 400 Bad Request ( When topic is not available in the database )**

Request Body :
<pre>
{
    "id":33,
    "rank":98
}
</pre>
Response Body:
<pre>
{
   
    "message": "id does not exist"
}
</pre>

**Status: 400 Bad Request ( When Id is empty )**

Request Body :
<pre>
{
    "id":null,
    "rank":98
}
</pre>
Response Body:
<pre>
{
    "message": "id is required"
}
</pre>

**Status: 400 Bad Request ( When rank is not between 0 and 100 )**

Request Body :
<pre>
{
    "id":null,
    "rank":948
}
</pre>
Response Body:
<pre>
{
    "message": "rank should be between 0 and 100"
}
</pre>

## Database Details
Schema of the two tables created in this task

![Untitled](https://user-images.githubusercontent.com/61858752/170113363-cb6835cf-cea5-461b-b0c5-c8cba51e559f.png)

Commands Used for Table Creation
<pre>
CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  name Varchar(90) NOT NULL
);

CREATE TABLE Ratings (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL,
  rank INT NOT NULL,
  CONSTRAINT fk_topic FOREIGN KEY(topic_id) REFERENCES topics(id)
)
</pre>

Commands Used for Data Insertion in Table Topics
<pre>
INSERT INTO topics (id,name) VALUES (1,'KGF2');
INSERT INTO topics (id,name) VALUES (2,'RRR');
INSERT INTO topics (id,name) VALUES (3,'The Kashmir Files');
INSERT INTO topics (id,name) VALUES (4,'Singham');
INSERT INTO topics (id,name) VALUES (5,'Harry Potter');
INSERT INTO topics (id,name) VALUES (6,'KGF');
INSERT INTO topics (id,name) VALUES (7,'Dr. Strange');
</pre>

Commands Used for Data Insertion in Ratings Table
<pre>
INSERT INTO Ratings (id,topic_id,rank) VALUES (1,1,88);
INSERT INTO Ratings (id,topic_id,rank) VALUES (2,2,80);
INSERT INTO Ratings (id,topic_id,rank) VALUES (3,3,95);
INSERT INTO Ratings (id,topic_id,rank) VALUES (4,4,75);
INSERT INTO Ratings (id,topic_id,rank) VALUES (5,5,90);
INSERT INTO Ratings (id,topic_id,rank) VALUES (6,6,80);
INSERT INTO Ratings (id,topic_id,rank) VALUES (7,7,92);
</pre>
