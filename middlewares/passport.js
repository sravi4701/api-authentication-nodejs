const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;

const config = require('config');
const UserModel = require('../db_models/users');

console.log('secret is ', config.get('jwt.SECRET'));

// define passport strategy this must be configured before
// accessing to passport middleware passport.authentication()
passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'), // from where password get token `Autherization jwt token`
            secretOrKey: config.get('jwt.SECRET') // provide the secret key
        },
        (payload, done) => {
            // parse the token to payload
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

// local strategy to authenticate user
// after authenticating passport attach user object to request
// for further reference.
passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        (username, password, done) => {
            UserModel.findOne({ email: username })
                .then(user => {
                    if (!user || !user.isValidPassword(password)) {
                        return done(null, false);
                    }
                    return done(null, user);
                })
                .catch(err => {
                    done(err, false);
                });
        }
    )
);
