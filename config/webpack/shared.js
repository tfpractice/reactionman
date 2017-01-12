import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { PATHS, ROOT_PATH, } from './constants';

const defEnvar = { prod: true, };

export default (env = defEnvar) => ({
  context: ROOT_PATH,
  entry: { app: PATHS.app, },
  resolve: {
    modules: [ 'node_modules', ],
    extensions: [ '.js', '.jsx', '.json', ],
    alias: {
      imports: PATHS.imports,
      config: PATHS.config,
      dist: PATHS.dist,
    },
  },
  output: {
    path:      PATHS.dist,
    filename:   '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader', ],
      },
      { test: /\.json$/, loader: 'json-loader', },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [ 'css-loader', 'sass-loader?outputStyle=compressed', ],
        }),
      },
    ],
  },
  devtool: env.prod ? 'source-map' : 'eval',
  plugins: [
    new ExtractTextPlugin('[name].styles.css'),
    new webpack.EnvironmentPlugin([ 'MOVIE_DB_API_KEY', 'FILMRATR_AUTH_SECRET', ]),
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false, }),
    new webpack.DefinePlugin(
      { 'process.env': { NODE_ENV: JSON.stringify('production'), }, }),
    new webpack.optimize.UglifyJsPlugin(
      { compress: { warnings: false, }, sourceMap: true, }),
    new webpack.LoaderOptionsPlugin(
      { options: { sassLoader: { includePaths: [ './node_modules', ], }, }, }),
  ],
  node: {
    fs:  'empty',
    net: 'mock',
    tls: 'mock',
    dns: 'mock',
  },
});
