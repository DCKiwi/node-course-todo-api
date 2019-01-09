const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to DB');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  


  }, (err) => {
    console.log('unable to fetch', err);
  });

  // db.collection('Todos').insertOne({
  //   text: 'something to do', 
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unanle to connect')
  //   }

  //   console.log(JSON.stringify(result.ops));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Jimmy', 
  //   age: 23,
  //   location: 'New Zealand'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unanle to connect')
  //   }

  //   console.log(JSON.stringify(result.ops));
  // });

  // client.close();
});