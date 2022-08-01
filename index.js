const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const keys = require('./config/keys')

const app = express()

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        (accessToken) => {
            console.log(accessToken)
        }
    )
)

app.get('/auth/google',
    passport.authenticate(
        'google',
        {
            scope: ['profile', 'email']
        }
    )
)

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log(`Server listening on PORT: ${PORT}`)