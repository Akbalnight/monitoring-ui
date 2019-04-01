import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MonitoringContext } from '../../context'

class MonitoringProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    listURL: PropTypes.string,
    pollURL: PropTypes.string,
    reconnectTimeout: PropTypes.number
  };

  static defaultProps = {
    listURL: '/monitoring/list',
    pollURL: '/monitoring/list/poll',
    reconnectTimeout: 10000,
    children: null
  };



  constructor(props) {
    super(props)
    this.startMonitoring = this.startMonitoring.bind(this)
    this.endMonitoring = this.endMonitoring.bind(this)
    this.state = {
      monitoringItems: [],
      isMonitoring: false,
      startMonitoring: this.startMonitoring,
      endMonitoring: this.endMonitoring
    }
    this.poll = this.poll.bind(this)
  }

  startMonitoring() {
    if (!this.state.isMonitoring) {
      this.setState({
        isMonitoring: true
      })
      this.templateFetch(this.props.listURL)
        .then(() => {
          if (this.state.isMonitoring) {
            this.poll()
          }
        })
        .catch(() => {
          if (this.state.isMonitoring) {
            setTimeout(this.startMonitoring, this.props.reconnectTimeout)
          }
        })
    }
  }

  endMonitoring() {
    this.setState({
      isMonitoring: false
    })
  }

  poll() {
    return this.templateFetch(this.props.pollURL)
      .then(() => {
        if (this.state.isMonitoring) {
          this.poll()
        }
      })
  }

  templateFetch(url) {
    // eslint-disable-next-line
    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          // eslint-disable-next-line
          return Promise.reject();
        }
        return response.json()
      })
      .then(monitoringItems => {
        if (this.state.isMonitoring) {
          this.setState({
            monitoringItems
          })
        }
        return Promise.resolve()
      })
      .catch(() => {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
      })
  }

  render() {
    const {
      children
    } = this.props

    return (
      <MonitoringContext.Provider
        value={this.state}
      >
        {children}
      </MonitoringContext.Provider>
    )
  }
}

export default MonitoringProvider;
