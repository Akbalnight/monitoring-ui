import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {setStateServices} from '../../actions'
import {connect} from 'react-redux'
import services from "../../reducers";

let timeoutRequest = 0;
let requestUrl = '/monitoring/list/poll';

class MonitoringProvider extends Component {
  static propTypes = {
    pollURL: PropTypes.string,
    listURL: PropTypes.string
  }

  componentDidMount() {
    requestUrl = this.props.listURL ? this.props.listURL : '/monitoring/list'
    // setTimeout(this.run(this.props.listURL ? this.props.listURL : '/monitoring/list').bind(this), timeoutRequest);
    setTimeout(this.run.bind(this), timeoutRequest);
  }

  run() { this.requestPoll() }

  requestPoll() {
    fetch(requestUrl)
      .then(response => {
        if(response.status !== 200) {
          // console.log('Request failed', response);
          timeoutRequest = 100000
        }
        else return response.json()
      })
      .then(data => {
        // this.successfullyPoll(data)
        data ? this.props.setStateServices({servicesState: data}) : this.props.setStateServices({servicesState: []})
        requestUrl = this.props.pollURL ? this.props.pollURL : '/monitoring/list/poll'
        timeoutRequest = 0
      })
      .catch(error => this.faildPoll(error))
      // .finally(()=> setTimeout(this.run(this.props.pollURL ? this.props.pollURL : '/monitoring/list/poll').bind(this), timeoutRequest))
      .finally(()=> setTimeout(this.run().bind(this), timeoutRequest))

  }

  successfullyPoll(data) {
    // console.log('Request successful', data)
    // this.props.setStateServices({servicesState: data})
    // this.requestPoll(this.props.pollURL ? this.props.pollURL : '/monitoring/list/poll')
  }

  faildPoll(error) {
    // console.log('Request failed', error)
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = (store) => ({
  servicesStateStore: store.services
})

export default connect(mapStateToProps, {setStateServices})(MonitoringProvider)
