const { User } = require('./models');
const jwt = require('jsonwebtoken');
const path = require('path'); const secretKey = require(path.join(__dirname, '.', 'config', 'jwt.json')).secret;
const util = require('util');

module.exports = {
    api : {
        verifyLogin : (req,res) => {
            jwt.verify(req.body.jwt,secretKey,(err,data)=>{
                if(err) {
                    console.log(123456)
                    console.log('에러내용 : ' + err)
                }
                if(data){
                    res.json({isAuth:true});
                }else {
                    res.json(isAuth:flase);
                }
                console.log(data);
            });
        },


        doLogin: async (req, res) => {
            console.log('doLogin is acting');
            await User.findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password,
                },
            }).then(result => {
                if(result){
                    const token = jwt.sign({
                        user_id: result.email,
                        user_password:result.password, 
                    },
                        secretKey, {
                        expiresIn: '1h'
                    });
                    // res.cookie('asd',token);
                    res.send(result.nickname);
                    // res.status(201).json({
                    //     result:'ok',
                    //     token
                    // });
                }else{
                    console.log('faild');
                }
            })
            .catch(err => console.log(err));


        },
        doRegister : (req,res) => {
                console.log(req.body.email);
                console.log(req.body.name);
                console.log(req.body.nickname);
                console.log(req.body.password);
                User.create({
                    email:req.body.email,
                    name:req.body.name,
                    nickname:req.body.nickname,
                    password:req.body.password,
                })
                .then(result=>{console.log('register success!')})
                .catch(err => {throw err});
        }

    }
}
