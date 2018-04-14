const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.get('/login', (req, res) => {
  res.send('Please login!');
});

router.post('/api/v1/someFeature', verifyToken, (req, res) => {
  
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

router.post('/api/v1/login', (req, res) => {
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
//Authorization: Bearer <access_token>
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

module.exports = router;