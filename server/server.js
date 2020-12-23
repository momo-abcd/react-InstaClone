const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const router = require('./router');
const sequelize = require('./models').sequelize;
sequelize.sync();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',router);


app.listen(PORT, () => {
    console.log('Server is On ');
});