# GoodBad Server: An App To Gage Public Opinion on Which Things Are Good and Which Are Bad

This application allows users to create an account, decide whether various things are good or bad, and see how other users voted as well. Users can also create suggestions about new things they'd like to vote on.

## Important Links

- [Deployed Client](https://joeygarber.github.io/GoodBad-Client/userthings)
- [Client Repo](https://github.com/JoeyGarber/GoodBad-Client)
- [Deployed API](https://vast-reaches-13226.herokuapp.com)

## Installation instructions

1. Fork and clone this repo
2. Install dependencies with `npm install`
3. Start the server with `npm run server`
4. Seed the database with `node seeds.js`

## Planning Story

GoodBad started as a party game mocking dichotomy. I would say a thing, my friends would tell me if they thought it was good or bad, and we'd get into fun little arguments about our answers. I decided to borrow some of Tinder's functionality and make it into an app. Users are shown cards with things on them, and can swipe right to say that thing is good or left to say it's bad. Mimicking the game, users can only see who also voted on something and how those people voted *after* the user herself has voted. They can also make suggestions for things that they'd like to see show up on cards in the future.

## Design Process

I started by creating the models for suggestions, then things, and finally users. Then I built the routes for those things in that same order. The suggestion routes went quickly because they were pretty standard CRUD actions. It took a bit longer to figure out how to make the routes for voting, but eventually that worked out as well.

## User stories

 - As a user I'd like to be able to sign up, sign in, sign out, and change my password.
 - As a user, I'll be able to vote "good" or "bad" on things.
 - As a user I'll be able to suggest new things to vote on, and read, update, and delete those suggestions.
 - As a user I'll be able to see how other users voted on things.
 - As a user, I'll be able to vote "I'm not sure" or "In the middle" (Sorry, never getting that one.)

## Technologies Used

- JavaScript
- Express.js
- MongoDb
- Mongoose
- React
- Bootstrap
- HTML/CSS

## Unsolved Problems

- I originally intended for this app to limit users to answering about 5-10 questions per day, so that they can make like Wordle and answer in the morning and then spend the day comparing answers with friends. However, I'm sort of liking users having access to all of the cards off the bat.
- I would like to let users make friends within the app, and show how those friends voted at the top of the voting results.

## Wireframe

[Wireframe](./Wireframe.jpeg) 
 
## ERD

[ERD](./ERD.jpeg)

## Routes

### Suggestion Routes
GET to /suggestions
GET to /suggestions/:id
POST to /suggestions
PATCH to /suggestions/:id
DELETE to /suggestions/:id

### Thing Routes
GET to /things
GET to /things/:id
PATCH to /things/:id (for storing user IDs on objects they've voted on)

### User Routes
POST to /sign-up
POST to /sign-in
PATCH to /change-password
DELETE to /sign-out
PATCH to /users (for storing thing IDs on users who have voted on that thing)
GET to /user/things (for showing things the user has voted on)
