import {SET_STATE_SERVICES} from '../constants/MonitoringTypes'

export const setStateServices = (servicesState) => (dispatch) => dispatch({type: SET_STATE_SERVICES, servicesState: servicesState})
