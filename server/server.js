const express = require('express');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 4000;


app.use('/',router);
// app.get('/api/host', (req, res) => {
//     res.send({host : 'yang' });
// });


app.listen(PORT, () => {
    console.log('Server is On ');
});