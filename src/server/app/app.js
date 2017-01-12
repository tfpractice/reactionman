import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import flash from 'express-flash';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';
import session from 'express-session';
import { Strategy as LocalStrategy, } from 'passport-local';
import { enableHotReload, } from 'config';
import { dbConfig, } from '../models';
import { applyRoutes, MovieRoutes, ReviewRoutes, SearchRoutes, UserRoutes, } from '../routes';
import { requestHandler, } from './request_handler';

mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(dbConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  console.log('mongoose connected');
});
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log('mongoose connected from conn variable');

  // Wait for the database connection to establish, then start the app.
});

// initialize express
const app = enableHotReload(express());

// BodyParser Middleware
app.use(bodyParser.json({ limit: '20mb', }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false, }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.resolve(__dirname, 'dist')));

// Express Session
app.use(session({
  secret: process.env.FILMRATR_AUTH_SECRET,
  saveUninitialized: true, resave: true,
}));

// Connect Flash
app.use(flash());

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//  backend api routes
app.use('/api', MovieRoutes, ReviewRoutes);

// applyRoutes(app, passport);
applyRoutes(app, passport);

// establish server render
app.use(requestHandler);

export default app;
