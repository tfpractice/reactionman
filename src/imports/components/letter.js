import React from 'react';
import { connect, } from 'react-redux';

const mapStateToProps = ({ guesses, }, { chr, }) =>
({ isGuessed: new Set(guesses).has(chr.toUpperCase()), });

const Letter = ({ chr, isGuessed, }) => (<b>
  {isGuessed ? ` ${chr} ` : ' ___ ' }
</b>);

export default connect(mapStateToProps)(Letter);
