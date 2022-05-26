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
    title: 'The Moon'
  },
  {
    title: 'Paintball'
  },
  {
    title: 'The San Andreas Fault'
  },
  {
    title: 'Architecture'
  },
  {
    title: 'Architects'
  },
  {
    title: 'Beaks'
  },
  {
    title: 'Resin Art'
  },
  {
    title: 'Painters Tape'
  },
  {
    title: 'Plastic'
  },
  {
    title: 'The Internet'
  },
  {
    title: 'Charcoal'
  },
  {
    title: 'Candlesticks'
  },
  {
    title: 'Game of Thrones'
  },
  {
    title: 'Top Sheets'
  },
  {
    title: 'Hedonism'
  },
  {
    title: 'Meteorology'
  },
  {
    title: 'Levers'
  },
  {
    title: 'Bonsai Gardens'
  },
  {
    title: 'Bon Jovi'
  },
  {
    title: 'Liquitex Acrylic Paint'
  },
  {
    title: 'Brick Houses'
  },
  {
    title: 'Taffy'
  },
  {
    title: 'Paul Thomas Anderson'
  },
  {
    title: 'John Mulaney'
  },
  {
    title: 'Tide Pods'
  },
  {
    title: 'Fight or Flight Responses'
  },
  {
    title: 'Good/Bad'
  },
  {
    title: 'Bungee Cords'
  },
  {
    title: 'Raves'
  },
  {
    title: 'Nostalgia'
  },
  {
    title: 'Bike Shorts'
  },
  {
    title: 'Throw Pillows'
  },
  {
    title: 'Alpaca Wool'
  },
  {
    title: 'Goat Cheese'
  },
  {
    title: 'Society'
  },
  {
    title: 'Poison Dart Frogs'
  },
  {
    title: 'Blow Dart Guns'
  },
  {
    title: 'Reddit'
  },
  {
    title: 'Baths'
  },
  {
    title: 'Facts'
  },
  {
    title: 'Balloons'
  },
  {
    title: 'Brutalism'
  },
  {
    title: 'Coat Hangers'
  },
  {
    title: 'Stoned Ape Theory'
  },
  {
    title: 'Tracheotomy'
  },
  {
    title: 'Jazz'
  },
  {
    title: 'Modern Farmhouse Decor'
  },
  {
    title: 'Pus'
  },
  {
    title: 'Motivational Speakers'
  },
  {
    title: 'Charter Schools'
  },
  {
    title: 'Tom and Jerry'
  },
  {
    title: 'Nuclear Fission'
  },
  {
    title: 'The Invisible Hand'
  },
  {
    title: 'Medieval French Poetry'
  },
  {
    title: 'Sectumsempra'
  },
  {
    title: 'Kanye'
  },
  {
    title: 'Mangos'
  },
  {
    title: 'Exotic Fish'
  },
  {
    title: 'Draymond Green'
  },
  {
    title: 'Nirvana'
  },
  {
    title: 'Mail'
  },
  {
    title: 'Trolleys'
  },
  {
    title: 'The Trolley Problem'
  },
  {
    title: 'The Reformation'
  },
  {
    title: 'Italy'
  },
  {
    title: 'Tonalism'
  },
  {
    title: 'Ancient Greece'
  },
  {
    title: 'Shoelaces'
  },
  {
    title: 'The Military-Industrial Complex'
  },
  {
    title: 'The 95 Theses'
  },
  {
    title: 'Dogs in Outfits'
  },
  {
    title: 'Word Art'
  },
  {
    title: 'Pop Punk'
  },
  {
    title: 'Apples'
  },
  {
    title: 'Trampolines'
  },
  {
    title: 'The Sun'
  },
  {
    title: 'The Depp-Heard Trial'
  },
  {
    title: 'Screenshots'
  },
  {
    title: 'Cling Wrap'
  },
  {
    title: 'Tube Tops'
  },
  {
    title: 'eBooks'
  },
  {
    title: 'Doric Columns'
  },
  {
    title: 'Buzz Cuts'
  },
  {
    title: 'Estate Taxes'
  },
  {
    title: 'Taxation'
  },
  {
    title: 'Cursive'
  },
  {
    title: 'Pilates'
  }
]

const seedDB = async () => {
  await Thing.deleteMany({})
  await Thing.insertMany(seedThings)
}

seedDB().then(() => {
  mongoose.connection.close()
}).then(() => console.log('Closed'))
