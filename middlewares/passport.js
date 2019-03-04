const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('config');
const UserModel = require('../db_models/users');

console.log('secret is ', config.get('jwt.SECRET'));

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'), // from where password get token
            secretOrKey: config.get('jwt.SECRET') // provide the secret key
        },
        (payload, done) => {
            console.log('payload is', payload);
            // find user by id from payload
            UserModel.findOne({ _id: payload.sub.id })
                .then(user => {
                    // if no user found return done(null, false)
                    if (!user) return done(null, false);
                    return done(null, user);
                })
                .catch(err => {
                    return done(err, false);
                });
        }
    )
);
