const pureCli = require('./pure-cli');

function reducer(state, input) {
  if (input === 'q'){
    process.exit();
  }
  else if (input === '+'){
    return input-1
  }
  else if (input === '-'){
    return input-1;
  }
  else if (!isNaN(parseFloat(state))){
    return input * input;
  }
}

module.exports = reducer;

function display(state) {
  console.log(state);
}

if (require.main === module) {
  pureCli(reducer, display);
}
