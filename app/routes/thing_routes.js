// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Thing = require('../models/thing')

// Most of the thing routes are going to be useless in version one because users are not going to be able to create, index, or delete things. They can only update them (with likes), and show them by swiping.

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existent document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /examples
router.get('/things', requireToken, (req, res, next) => {
  Thing.find({})
    .then(thing => {
      // `examples` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return thing.map(thing => thing.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(thing => res.status(200).json({ things: thing }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /examples/5a7db6c74d55bc51bdf39793
router.get('/things/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Thing.findById(req.params.id)
    .then(handle404)
  // if `findById` is successful, respond with 200 and "example" JSON
    .then((thing) =>
      res.status(200).json({ thing: thing.toObject() })
    )
  // if an error occurs, pass it to the handler
    .catch(next)
})

// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch(
  '/things/:id',
  requireToken,
  removeBlanks,
  (req, res, next) => {
    // if the client attempts to change the `owner` property by including a new
    // owner, prevent that by deleting that key/value pair
    delete req.body.restaurant.owner

    Thing.findById(req.params.id)
      .then(handle404)
      .then((thing) => {
        if (req.body.data.vote === 'left') {
          thing.baders.push(req.user.id)
        } else if (req.body.data.vote === 'right') {
          thing.gooders.push(req.user.id)
        }
        return thing.save()
      })
    // if that succeeded, return 204 and no JSON
      .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
      .catch(next)
  }
)

module.exports = router
