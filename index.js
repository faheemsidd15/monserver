const express = require('express');
const app = express();

//set login middleware
const login = require('./routes/login')
app.use('/', login);

app.listen(8080, () => {
  console.log('server started on port 8080')
});
