var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "THISISKEY";

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    // console.log("payload received", jwt_payload);
    done(null, jwt_payload);
  })
);
