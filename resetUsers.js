const mongoose = require('mongoose')
const User = require('./app/models/user')

const db = require('./config/db')

mongoose
  .connect(db, {
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

const seedDB = async () => {
  await User.deleteMany({})
}

seedDB()
  .then(() => {
    mongoose.connection.close()
  })
  .then(() => console.log('Closed'))
