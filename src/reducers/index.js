import * as types from '../constants/MonitoringTypes'

const initialState = {
  servicesState: []
}

const services = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STATE_SERVICES:
      return Object.assign({}, state, action.servicesState)
    default:
      return state
  }
}

export default services
