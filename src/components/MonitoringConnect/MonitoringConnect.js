import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {setStateServices} from '../../actions'
import {connect} from 'react-redux'

class MonitoringConnect extends Component {
  static propTypes = {
    pollURL: PropTypes.string,
    listURL: PropTypes.string
  }

  componentDidMount() {
    this.requestPoll(this.props.listURL ? this.props.listURL : '/monitoring/list')
  }

  requestPoll(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => this.successfullyPoll(data))
      .catch(error => this.faildPoll(error))
  }

  successfullyPoll(data) {
    // console.log('Request successful', data)
    this.props.setStateServices({servicesState: data})
    this.requestPoll(this.props.pollURL ? this.props.pollURL : '/monitoring/list/poll')
  }

  faildPoll(error) {
    console.log('Request failed', error)
  }

  render() {
    return null
  }
}

const mapStateToProps = (store) => ({
  servicesStateStore: store.ServicesReducer
})

export default connect(mapStateToProps, {setStateServices})(MonitoringConnect)
