export default function(state = null, action){

  switch(action.type){
    //never return a mutated state
    case 'selectBook':
    return action.payload
  }
  return state;
}
