// import express from 'express';
const express = require('express');
const jwt = require('jsonwebtoken')
// import bodyParser from 'body-parser';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools';

// import typeDefs from './schema';
// import resolvers from './resolvers';
// import models from './models';


// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });


const app = express();

// const graphqlEndpoint = '/graphql';

// app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

// app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

app.get('/api/welcome', (req, res) => {
  res.json({
    message: 'welcome to this api!'
  });
});

app.post('/api/v1/someFeature', verifyToken, (req, res) => {

  //verify token is in request header authorization field
  jwt.verify(req.token, 'mysecret', (err, authData)=>{
    if(err){
      res.sendStatus(403);
    } else {
      res.json({
        message: 'success!',
        authData
      })
    }
  });

})

app.post('/api/v1/login', (req, res) => {
  //fake user
  const user = {
    id: 1,
    username: 'mohammad',
    pw: '123456'
  }

  jwt.sign({user: user}, 'mysecret', (err, token) => {
    res.json({
      token
    });
  });

});

//Token format
// Authorization: Bearer <access_token>

//Verify token
function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers['authorization'];

  //check if bearer is undefined
  if (typeof(bearerHeader) !== 'undefined') {
    //get auth header value
    const bearer = bearerHeader.split(' ');

    //get token
    const token = bearer[1];

    //set token
    req.token = token;

    next();

  } else {
    //Forbidden
    res.sendStatus(403)
  }
}

app.listen(8080, () => {
  console.log('server started on port 8080')
});
