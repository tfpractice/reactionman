import React, { PropTypes, } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, reset, } from 'redux-form';
import { connect, } from 'react-redux';
import { TextField, } from 'redux-form-material-ui';
import { guessActs, } from '../actions';

const resetForm = formID => (action, dispatch) => dispatch(reset(formID));

const BaseGuess = ({ handleSubmit, dispatch, onSubmit, }, context) => (
  <form onSubmit={handleSubmit} >
    <Field name="guess" component={TextField} hintText="Guess"
      onKeyPress={({ key, }) => onSubmit(key)}/>
    <FlatButton primary label="Submit" type="submit" />
  </form>
  );

const ReduxGuess = reduxForm()(BaseGuess);

const GuessForm = ({ guessLetter, guessForm, formID, dispatch, }) => (
    <div className="row">
      <p>Guess</p>
      <TextField id="charGuess" hintText="guess characters"
        onKeyPress={({ key, }) => guessLetter(key)}
        onChange={(e, val, ...args) => {
          console.log('e, val', e, val, args);

          // guessLetter(val);
          (reset('charGuess'));
        }} />
      <ReduxGuess
        form={formID} onSubmit={guessLetter} onSubmitSuccess={resetForm(formID)}
      />
    </div>
  );

export default connect(null, guessActs)(GuessForm);

// export default connect()(reduxForm()(GuessForm));
