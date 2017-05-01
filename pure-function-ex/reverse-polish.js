const pureCli = require('./pure-cli');

function reducer(state, input) {
  if (state === null){
    return {stack: []};
  }
  else if (input === 'q'){
    return {stack: state.stack, action:'end'};
  }
  else if (input === '-'){
    return {stack: state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]-state.stack[state.stack.length-2]])};
  }
  else if (input === '+'){
    return {stack: state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]+state.stack[state.stack.length-2]])};
  }
  else if (input === '*'){
    return {stack: state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]*state.stack[state.stack.length-2]])};
  }
  else if (input === '/'){
    return {stack: state.stack.slice(0, state.stack.length-2).concat([state.stack[state.stack.length-1]/state.stack[state.stack.length-2]])};
  }
  else if (!isNaN(input)){
    return {stack: state.stack.slice(0, state.stack.length-2).concat([parseInt(input)])};
  }
}
module.exports = reducer;
function display(state) {
  console.log(state.stack.join(' '));
}
if (require.main === module) {
  pureCli(reducer, display);
}
