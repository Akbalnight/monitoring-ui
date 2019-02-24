import React, { Component } from 'react'

import { Monitoring, MonitoringConnect, CheckVisibleItem } from 'monitoring-ui'

import {Menu} from 'antd'

class App extends Component {
  render () {
    return (
      <div>
        <MonitoringConnect />

        <Menu>
          <CheckVisibleItem serviceKeys={[['statement', 'protocol'], ['reports', 'reglament']]} >
            <Menu.Item> Two </Menu.Item>
          </CheckVisibleItem>
        </Menu>
        <Monitoring />
      </div>
    )
  }
}
export default App
