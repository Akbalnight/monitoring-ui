import React, { Component } from 'react'
import { MonitoringProvider, MonitoringContext } from 'monitoring-ui'
import 'antd/dist/antd.css'

let isStarted = false

class App extends Component {
  render () {
    return (
      <MonitoringProvider>
        <MonitoringContext.Consumer>
          {({ monitoringItems, isMonitoring, startMonitoring, endMonitoring }) => {
            if (!isStarted) {
              startMonitoring()
              isStarted = true
            };
            return <h1>Monitroing</h1>
          }}
        </MonitoringContext.Consumer>
      </MonitoringProvider>
    )
  }
}

export default App
