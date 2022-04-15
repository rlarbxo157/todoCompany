const express = require('express');
const app = express();
const postRouter = require('./routes/post');

app.get('/',(req,res)=> {
   res.json({
       id:1,
       name:'김규태'
   })
});

app.use('/post',postRouter);

app.listen(8000,()=> {
    console.log('server running');
})


