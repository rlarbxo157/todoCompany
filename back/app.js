const express = require('express');
const app = express();
const postRouter = require('./routes/post');
var cors = require('cors');

const corsOptions = {
    origin:'http://localhost:3000'
}

app.get('/',(req,res)=> {
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.json({
        id:1,
        name:'김규태'
    })
});

app.use(cors(corsOptions));
app.use('/post',postRouter);

app.listen(8000,()=> {
    console.log('server running');
})


