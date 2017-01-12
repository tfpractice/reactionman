import React from 'react';
import { connect, } from 'react-redux';
import Letter from './letter';
import { guessActs, wordActs, } from '../actions';
import FlatButton from 'material-ui/FlatButton';

const unknowns = word => guesses =>
new Set(word.split('').filter(c => !guesses.has(c.toUpperCase())));

const mapStateToProps = ({ guesses, synonyms, word, }, ) =>
({ characters: (word.toUpperCase().split('')), synonyms, });

const Word = ({ guesses, word, characters, resetWord, synonyms, guessLetter, }) => (
<div>
  <h1> this is the main word div</h1>
  <h1>{characters.map((c, i) => <Letter key={i} chr={c}/>)}</h1>
  <input type="text" onKeyPress={({ key, }) => guessLetter(key)} />
  {synonyms.map((s, i) => <h1 key={i}>{s}</h1>)}
  
</div>
);

export default connect(mapStateToProps, { ...wordActs, ...guessActs, })(Word);
