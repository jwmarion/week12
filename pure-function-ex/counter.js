const pureCli = require('./pure-cli');

function reducer(state, input) {
  if(state === null){
    return 0;
  }
  else if (input === 'q'){
    return 'end';
  }
  else if (input === '+'){
    return state+1;
  }
  else if (input === '-'){
    return state-1;
  }
  else if (!isNaN(input)){
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
