const express = require('express');
const app = express();
var cors = require('cors');
const postRouter = require('./routes/post');

const corsOptions = {
    origin:'http://localhost:3000'
}

// app.get('/',(req,res)=> {
//     res.header("Access-Control-Allow-Origin","http://localhost:3000");
//     res.json({
//        id:1,
//        name:'김규태'
//     })
// });

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


