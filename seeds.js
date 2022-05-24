const mongoose = require('mongoose')
const Thing = require('./app/models/thing')

const db = require('./config/db')

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connection successful')
  })
  .catch((err) => {
    console.log(err)
  })

const seedThings = [
  {
    title: 'war'
  },
  {
    title: 'bubblegum'
  },
  {
    title: 'canned peaches'
  },
  {
    title: 'bologna'
  }
]

const seedDB = async () => {
  await Thing.deleteMany({})
  await Thing.insertMany(seedThings)
}

seedDB().then(() => {
  mongoose.connection.close()
}).then(() => console.log('Closed'))
