export const addSmurf = smurf => {
  return {
    type: 'ADD_SMURF',
    smurf
  }
}

export const delSmurf = smurf => {
  return {
    type: 'DEL_SMURF',
    smurf
  }
}

export const replaceSmurf = (smurf, replacement) => {
  return {
    type: 'REP_SMURF',
    smurf,
    replacement
  }
}
