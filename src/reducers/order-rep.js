import { SET_ORDER_AMT } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_ORDER_AMT:
      return action.payload
    default:
      return state
  }
}
