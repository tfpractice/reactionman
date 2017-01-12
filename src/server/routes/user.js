import { Router, } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy, } from 'passport-local';
import { UserController, } from '../controllers';
import { User, } from '../models';
import { isLoggedIn, } from './auth';

const router = new Router();

export const configStrategies = (passport) => {
  passport.use('local-register',
    new LocalStrategy({ passReqToCallback: true, }, UserController.registerUser));
  passport.use('local-login',
    new LocalStrategy({ passReqToCallback: true, }, UserController.loginUser));
};

export const configSerial = (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id, (err, user) => {
    done(err, user);
  }));
};

export const applyRoutes = (app, passport) => {
  configStrategies(passport);
  configSerial(passport);

  app.post('/register', passport.authenticate('local-register'), (req, res) => {
    console.log(__filename, '\n============ registraiton from passport====', req.user);
    console.log('==========REQUEST KEYS=======', Object.keys(req), '\n');

    res.json({ user: req.user.username, });
  });

  app.post('/login', passport.authenticate('local-login'), (req, res) => {
    console.log(__filename, '=======AUTHENTICATION CALLBACK=======', req.user,);
    console.log('==========REQUEST KEYS=======', Object.keys(req.headers), '\n');

    res.json({ user: req.user, });
  });

  app.get('/logout', (req, res) => {
    console.log('REQUEST LOGOUT');
    req.logout();
    res.json({ status: 'ok', });
  });

  app.get('/me', (req, res) => {
    console.log(`I am ${req.user}`);
    if (!req.user) {
      res.json({ user: null, });
    } else {
      const { id, username, } = req.user;

      res.json({ user: { id, username, }, });
    }
  });
};

export default router;
