import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import merge from 'webpack-merge';
import webpack from 'webpack';
import WPClean from 'clean-webpack-plugin';
import sharedConf from './shared';

import { BUILD_CONFIG, DEV_CONFIG, PATHS, } from './constants';

const clean = path =>
({ plugins: [ new WPClean([ path, ], { root: process.cwd(), }), ], });

export const build = common =>
  merge.smart(common, BUILD_CONFIG, clean(PATHS.dist));

export const dev = (common = sharedConf({ prod: false, })) => {
  // console.log('==============common==============');
  // console.log(process.env.NODE_ENV);
  // console.log(common);
  const dConf = (merge.smart(common, DEV_CONFIG));

  // console.log('==============dConf==============');
  // console.log(process.env.NODE_ENV);
  // console.log(dConf);
  return dConf;
};

export const applyHotMiddleware = compiler => (app) => {
  if (process.env.NODE_ENV !== 'production') {
    app.use(devMiddleware(compiler, {
      noInfo: true,
      historyApiFallback: true,
      publicPath: compiler.options.output.publicPath,
    }));

    app.use(hotMiddleware(compiler));
  }

  return app;
};

export const compile = config => webpack(config);
export const enableHotReload = app => applyHotMiddleware(compile(dev()))(app);
