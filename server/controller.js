module.exports = {
    api : {
        getData : (req,res) => {
            res.send('controller is good~!');
        },
        doLogin : (req,res) => {
            res.send('asdasd');
            console.log(res);
        }
    }
}