  import React from 'react';
  import { connect, } from 'react-redux';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
  import FlatButton from 'material-ui/FlatButton';
  import AppBar from 'material-ui/AppBar';
  import Letter from './letter';
  import Word from './word';
  import { gifActs, reactionActs, wordActs, } from '../actions';

  const mapStateToProps = ({ word, guesses, synonyms, remaining, gifs, reactions, }) =>
({
 word, guesses, remaining, gifs, next: reactions[0],
});

  const App = ({ word, guesses, remaining, getRandomWord, getTrending, next, gifs, }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>
    <div className="App">
      <AppBar
        title={<FlatButton label={'Get Word'} secondary onClick={getRandomWord} />}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <div className="container">
        <h1> GUESSES REMAINING {remaining} </h1>
        <FlatButton label={'Get Trending Gifs'} secondary onClick={() => getTrending(next)} />
        <Word word={word}/>
        <h1>{[ ...guesses, ].map((c, i) => <Letter key={i} chr={c}/>)}</h1>
        {gifs.map((g, i) => <img key={i} src={g.url}/>)}
      </div>

    </div>
</MuiThemeProvider>

);

  export default connect(mapStateToProps, { ...wordActs, ...gifActs, })(App);
