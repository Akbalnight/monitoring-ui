import React, { Component } from 'react'

import { Monitoring, MonitoringProvider, CheckVisibleItem } from 'monitoring-ui'

import {Menu} from 'antd'

class App extends Component {
    componentDidMount() {
        // MonitoringConnect()
    }
  render () {
    return (
        <MonitoringProvider>
          <div>
            <Menu>
              {/*<CheckVisibleItem serviceKeys={[['statement', 'protocol'], ['reports', 'reglament']]} >*/}
                {/*<Menu.Item> Two </Menu.Item>*/}
              {/*</CheckVisibleItem>*/}
            </Menu>
            <Monitoring />
          </div>
        </MonitoringProvider>
    )
  }
}
export default App
