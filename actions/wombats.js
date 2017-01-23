export const addWombat = wombat => {
  return {
    type: 'ADD_WOMBAT',
    wombat
  }
}

export const delWombat = wombat => {
  return {
    type: 'DEL_WOMBAT',
    wombat
  }
}

export const replaceWombat = (wombat, replacement) => {
  return {
    type: 'REP_WOMBAT',
    wombat,
    replacement
  }
}
