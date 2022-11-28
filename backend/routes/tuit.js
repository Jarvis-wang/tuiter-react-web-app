var express = require('express');
var router = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
// var mongoose = require('../db/mongose')
const uri = "mongodb://127.0.0.1"
const client = new MongoClient(uri)

const tuits = [{
    "_id": 333,
    "icon":"bob.jpg",
    "topic": "Space",
    "userName": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "Tesla.jpg",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  },
    {
      "_id": 123,
      "icon":"bob.jpg",
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
      "image": "prof.jpg",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "At the time, supernovas had not yet been discovered. Tycho's Star was finally classified as a supernova in the 1940s. Scientists now think it was a small star called a white dwarf that exploded thousands of years ago. Because Tycho's Star is 13,000 light-years from Earth, it took a while before anyone could see it."
    },
    {
      "_id": 234,
      "icon":"bob.jpg",
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "On This Day in Space Archive! ",
      "image": "prof.jpg",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "Hanneke Weitering is an editor at Space.com with 10 years of experience in science journalism. She has previously written for Scholastic Classroom Magazines, MedPage Today and The Joint Institute for Computational Sciences at Oak Ridge National Laboratory. After studying physics at the University of Tennessee in her hometown of Knoxville, she earned her graduate degree in Science, Health and Environmental Reporting (SHERP) from New York University. Hanneke joined the Space.com team in 2016 as a staff writer and producer, covering topics including spaceflight and astronomy. She currently lives in Seattle, home of the Space Needle, with her cat and two snakes. In her spare time, Hanneke enjoys exploring the Rocky Mountains, basking in nature and looking for dark skies to gaze at the cosmos. "
    }
  
  ]  

router.get('/list', async (req, res, next)=>{
    await client.connect()
    const dbo = client.db('tuiter')
    var tuits = dbo.collection('tuits');

    const tuitsList = tuits.find({}).toArray((err, result)=>{
        res.send({
            code: 200,
            msg: 'successfully',
            data: result
        })
    })
    
})

router.post('/create', async (req, res, next)=>{
    // tuits.push(req.body)
    await client.connect()
    const dbo = client.db('tuiter')
    var tuits = dbo.collection('tuits');
    tuits.insertOne(req.body, (err, result)=>{
        res.send({
            code: 200,
            msg: 'successfully'
        })
    })
})

router.put('/liked', async (req, res, next)=>{
    const {id} = req.body
    await client.connect()
    const dbo = client.db('tuiter')
    var tuits = dbo.collection('tuits');
    // console.log(id, req.body);
    tuits.find({"_id": id}).toArray((err, result)=>{
        // console.log(result);
        tuits.updateOne({_id: id}, {$set: {"liked": !result[0].liked, "likes": result[0].liked?result.likes - 1: result[0].likes + 1}}, (error, msg)=>{
            res.send({
                code: 200,
                msg: 'successfully'
            })
        })
    })

})

router.delete('/list/:id', async (req, res, next)=>{
    const {id} = req.params
    await client.connect()
    const dbo = client.db('tuiter')
    var tuits = dbo.collection('tuits');
    tuits.deleteOne({"_id": Number(id)}, (err, result)=>{
        res.send({
            code: 200,
            msg: 'successfully'
        })
    })
    // tuits.map((item, index) => {
    //     if(item._id == id){
    //         tuits.splice(index, 1)
    //         flag = false
    //         res.send({
    //             code: 200,
    //             msg: 'successfully'
    //         })
    //     }
    // })
    
})

module.exports = router