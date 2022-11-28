var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/tuiter')

const tuitsModal = mongoose.Schema({
    "_id": Number,
    "icon":String,
    "topic": String,
    "userName": String,
    "time": String,
    "title": String,
    "image": Number,
    "liked": Boolean,
    "replies": Number,
    "retuits": Number,
    "likes": Number,
    "handle": String,
    "tuit": String
})