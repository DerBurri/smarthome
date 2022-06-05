const express = require('express');
const path = require('path');

const app = express();

// Init Middleware
app.use(express.json());

// Define Routes
//app.use('/api/users', require('./routes/api/users'));
//app.use('/api/auth', require('./routes/api/auth'));
//app.use('/api/profile', require('./routes/api/profile'));
//app.use('/api/posts', require('./routes/api/posts'));

// TODO: understand this snippet
// Serve static assets in production
//if (process.env.NODE_ENV === 'production') {
//  // Set static folder
//  app.use(express.static('client/build'));
//
//  app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//  });
//}

app.post('/', function (req, res) {
    console.log(req.body.name); 
    res.end();
})

app.get('/', function(req, res) {
    console.log(req.body.name)
    res.end()
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
