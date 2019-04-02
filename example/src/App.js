import React, { Component } from 'react'
import { Button } from 'antd'
import { MonitoringProvider, MonitoringContext, DefaultMonitoringManager } from 'monitoring-ui'
import 'antd/dist/antd.css'

let isStarted = false

class App extends Component {
  render () {
    return (
      <MonitoringProvider>
        <MonitoringContext.Consumer>
          {({ monitoringItems, isMonitoring, startMonitoring, endMonitoring }) => {
            if (!isStarted) {
              // безусловно не лучшая идея запускать мониторинг таким образом
              // обычно start/end monitoring частью props какого-нибудь компонента
              // например компонента ответственного за авторизацию
              startMonitoring()
              isStarted = true
            };
            return (
              <DefaultMonitoringManager>
                <Button>
                  Показать
                </Button>
              </DefaultMonitoringManager>
            )
          }}
        </MonitoringContext.Consumer>
      </MonitoringProvider>
    )
  }
}

export default App
