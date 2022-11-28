var express = require('express');
var router = express.Router();
var {MongoClient} = require('mongodb')

const uri = "mongodb://127.0.0.1"
const client = new MongoClient(uri)

const userList = [
  { "username": "alice",   "type": "FACULTY", "_id": "123" },
  { "username": "bob",     "type": "STUDENT", "_id": "234" },
  { "username": "charlie", "type": "FACULTY", "_id": "345" }
]

/* GET users listing. */
router.post('/create', async function(req, res, next) {
  await client.connect()
  const dbo = client.db('tuiter')
  var users = dbo.collection('users');
  const { username, id, type } = req.body
  users.insertOne({username, type, _id: id}, (err, result)=>{
    res.send({
      code: 200,
      msg: 'create successfully'
    })
  })
   
});

router.get('/list', async (req, res, next)=>{
  await client.connect()
  const dbo = client.db('tuiter')
  var users = dbo.collection('users');
  users.find({}).toArray((err, result)=>{
    res.send({
      code: 200,
      msg: 'successfully',
      data: result
    })
  })
  
})

router.get('/detail/:id', async(req, res, next)=>{
  const {id} = req.params
  await client.connect()
  const dbo = client.db('tuiter')
  var users = dbo.collection('users');
  users.deleteOne({"_id": Number(id)}, (err, result)=>{
    res.send({
      code: 200,
      msg: 'successfully'
    })
  })
})

router.put('/update/:id', async(req, res, next)=>{
  const {id} = req.params
  await client.connect()
  const dbo = client.db('tuiter')
  var users = dbo.collection('users');
  users.updateOne({"_id": Number(id)}, {$set: req.body}, (err, result)=>{
    res.send({
      code: 200,
      msg: 'successfully'
    })
  })
})

module.exports = router;
