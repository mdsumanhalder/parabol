import {resetAtmosphere} from 'universal/components/AtmosphereProvider/AtmosphereProvider'
import SendClientSegmentEventMutation from 'universal/mutations/SendClientSegmentEventMutation'
import {reset as resetAppState} from 'universal/redux/rootDuck'
import {APP_TOKEN_KEY} from 'universal/utils/constants'

const signoutSuccess = {
  title: 'Tootles!',
  message: 'You’ve been logged out successfully.',
  autoDismiss: 5
}

const signout = (atmosphere, dispatch, history) => {
  window.localStorage.removeItem(APP_TOKEN_KEY)
  resetAtmosphere()
  SendClientSegmentEventMutation(atmosphere, 'User Logout')
  /* reset the app state, but preserve any pending notifications: */
  if (history) {
    history.replace('/')
  }
  dispatch(resetAppState())
  atmosphere.eventEmitter.emit('addToast', signoutSuccess)
}

export default signout
