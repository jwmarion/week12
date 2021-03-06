const pureCli = require('./pure-cli');

function reducer(state, input) {
  if (input === null || state === null){
    return {number: Math.floor(Math.random() * 10), guess: null, action: null};
      // return {number: 5, guess: null, action: null};
  }
  else if (parseInt(input) != state.number){
    return {number: state.number, guess: parseInt(input), action: state.action }
  }
  else if (parseInt(input) === state.number){
    return {number: state.number, guess: parseInt(input), action: 'end' }
  }
}

module.exports = reducer;

function display(state) {
  if (state.guess === null) {
    console.log('I am thinking of a number between 1-10. Take a guess.');
  } else if (state.number === state.guess) {
    console.log('You win!');
  } else if (state.number > state.guess) {
    console.log('Too low! Try again.');
  } else if (state.number < state.guess) {
    console.log('Too high! Try again.');
  }
}

if (require.main === module) {
  pureCli(reducer, display);
}
