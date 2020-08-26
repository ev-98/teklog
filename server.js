var PORT = process.env.PORT || 5000;
//imports
const express = require('express')
var mongoose = require('mongoose')
const methodOverride = require('method-override')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express()

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/blog";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI,options)

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

//launch page render
app.get('/', async (req,res) =>{
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', {articles: articles})
})

//router
app.use('/articles', articleRouter)


app.listen(PORT);
