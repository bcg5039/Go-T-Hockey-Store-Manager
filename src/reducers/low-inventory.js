import { SET_LOW_INV_STICKS } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_LOW_INV_STICKS:
      return action.payload
    default:
      return state
  }
}
