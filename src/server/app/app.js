import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import flash from 'express-flash';

// import mongoose from 'mongoose';
// import passport from 'passport';
import path from 'path';

// import session from 'express-session';
// import { Strategy as LocalStrategy, } from 'passport-local';
import { enableHotReload, PATHS, } from 'config';
console.log('PATH', PATHS);

// import { applyRoutes, MovieRoutes, ReviewRoutes, SearchRoutes, UserRoutes, } from '../routes';
import { requestHandler, } from './request_handler';

// initialize express
const app = enableHotReload(express());

// BodyParser Middleware
app.use(bodyParser.json({ limit: '20mb', }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false, }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.resolve(__dirname, 'dist')));
console.log('path.resolve(__dirnam)', path.resolve(__dirname, 'dist'));

// console.log('express.static(path.resolve(__dirname', express.static(path.resolve(__dirname, 'dist')));

// Connect Flash
app.use(flash());

// Global Vars
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });

//  backend api routes
// app.use('/api', MovieRoutes, ReviewRoutes);

// applyRoutes(app, passport);
// applyRoutes(app, passport);

// establish server render
app.use(requestHandler);

export default app;
