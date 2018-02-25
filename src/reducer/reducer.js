import { STATUS } from '../actionTypes'
import { mapStatus } from './lib'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case STATUS:
      return mapStatus(state, action)
    default:
      return state
  }
}
