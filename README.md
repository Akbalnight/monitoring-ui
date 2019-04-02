# monitoring-ui

## Usage
Данный компонент работает через React Context API.

## Пример использования
```
import React, { Component } from 'react'
import { MonitoringProvider, MonitoringContext, DefaultMonitoringManager } from 'monitoring-ui'

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

```
В болшинстве случаем start/end monitoring будет props'ом какго-нибудь вашего компонента.

Например
```
  import {MonitoringProvider, MonitoringContext} from 'monitoring-ui'

  <MonitoringProvider>
    <MonitoringContext.Consumer>
      {({ startMonitoring, endMonitoring }) => {
        return (
          <AuthComponent
            onAthSuccess={startMonitoring}
            onLogout={endMonitoring}
          />
        )
      }}
    </MonitoringContext.Consumer>
  </MonitoringProvider>
```

## License

Commercial © [](https://github.com/)
