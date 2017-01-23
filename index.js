import { createStore } from 'redux'

import { addWombat, delWombat, replaceWombat } from './actions/wombats'
import { addSmurf, delSmurf, replaceSmurf } from './actions/smurfs'

import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function wombats () {
  document.getElementById('app').innerHTML = store.getState().wombats.reduce(
    (out, wombat) => `${out}
      <li>${wombat}</li>
    `, '')
}

function smurfs () {
  document.getElementById('app').innerHTML += store.getState().smurfs.reduce(
    (out, smurf) => `${out}
      <li>${smurf}</li>
    `, '')
}

function del () {
  const member = document.getElementById('del-name').value
  console.log(member)
  store.dispatch(delWombat(member))
  store.dispatch(delSmurf(member))
}

function update () {
  const old = document.getElementById('old').value
  const replacement = document.getElementById('new').value
  store.dispatch(replaceSmurf(old, replacement))
  store.dispatch(replaceWombat(old, replacement))
}

function submitWombat () {
  const name = document.getElementById('wombat-name').value
  store.dispatch(addWombat(name))
}
function submitSmurf () {
  const name = document.getElementById('smurf-name').value
  store.dispatch(addSmurf(name))
}

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(wombats)
  store.subscribe(smurfs)
  wombats()
  smurfs()

document.getElementById('add').innerHTML = `
  <input id="wombat-name">
  <button id="submit-wombat">Add wombat</button>
  <input id="smurf-name">
  <button id="submit-smurf">Add smurf</button>
`

document.getElementById('delete').innerHTML = `
  <input id="del-name">
  <button id="delete">Delete</button>
`

document.getElementById('replace').innerHTML = `
  <input id="old" placeholder="current">
  <input id="new" placeholder="new">
  <button id="replace">Replace</button>
`

document.getElementById('submit-wombat').addEventListener('click', submitWombat)
document.getElementById('submit-smurf').addEventListener('click', submitSmurf)
document.getElementById('delete').addEventListener('click', del)
document.getElementById('replace').addEventListener('click', update)

})
