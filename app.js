const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/wikiDB');

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

const port = 3000;
const articleSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    }
});
const Article = mongoose.model('Article', articleSchema);

// request targating all articles

app.route('/article')
    .get(function(req, res) {
        Article.find(function(err, foundArticles) {
            if(!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })

    .post(function(req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
    
        newArticle.save(function(err) {
            if(!err) {
                res.send("added success");
            } else {
                res.send(err);
            }
        });
    })

    .delete(function(req, res) {
        Article.deleteMany(function(err) {
            if (!err) {
                res.send("deleted all");
            } else {
                res.send(err);
            }
        });
    });

// request targating special artical

app.route('/article/:articleTitle')
    .get(function(req, res) {
        Article.findOne({title: req.params.articleTitle}, function(err, foundArtical){
            if(!err) {
                if(foundArtical) {
                    res.send(foundArtical);
                } else {
                    res.send("Not found artical");
                }
            } else {
                res.send(err);
            }
        });
    })
    .put(function(req, res) {
        Article.updateOne({title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            function(err) {
                if (!err) {
                    res.send("Successfully updated");
                } else {
                    res.send(err);
                }
            });
    })
    .patch(function(req, res) {
        Article.updateMany({title: req.params.articleTitle},
            {$set: req.body},
            function(err, updateRes) {
                if(!err) {
                    res.send("Successfully updated");
                } else {
                    res.send(err);
                }
            });
    })
    .delete(function(req, res) {
        Article.deleteOne({title: req.params.articleTitle},
            function(err){
                if (!err) {
                    res.send("Successfully deleted");
                } else {
                    res.send(err);
                }
            });
    });

app.listen(port, function() {
    console.log("server started on port " + port);
});