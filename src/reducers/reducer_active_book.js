export default function(state = null, action){

  switch(action.type){
    //never return a mutated state
    case 'BOOK_SELECTED' :
    return action.payload
  }
  return state;
}
