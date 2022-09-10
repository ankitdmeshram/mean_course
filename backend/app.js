const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        "Origin, X-Requested-With, Content-Type, Accept"
     );
     res.setHeader(
        "Access-Control-Allow-Meathods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
     )
    next();
});

app.post("/api/posts/", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post Added Successfully'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 1,
            title: 'first server side post',
            content: 'this is coming from server'
        },
        {
            id: 2,
            title: 'second server side post',
            content: 'this is coming from server'
        },
    ]
    return res.status(200).json({
        message: 'Posts fetched succesfully',
        posts: posts
    });
});

module.exports = app;