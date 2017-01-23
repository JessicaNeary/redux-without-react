const smurfs = (state = ['Smurfette', 'Papa Smurf'], action) => {
  switch (action.type) {
    case 'ADD_SMURF':
      return [...state, action.smurf]

    case 'DEL_SMURF':
      return state.filter(smurf => smurf !== action.smurf)

    case 'REP_SMURF':
      return state.map(smurf => {
        if(smurf === action.smurf){
          return action.replacement
        }
        return smurf
      })

    default:
      return state
  }
}

export default smurfs
