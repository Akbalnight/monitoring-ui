import React, { Component } from 'react'

import { Monitoring, MonitoringConnect, CheckVisibleItem } from 'monitoring-ui'

import {Menu} from 'antd';

class App extends Component {
  render () {
    return (
      <div>
        <MonitoringConnect />

        <Menu>

          {/*<CheckVisibleItem serviceKeys={['statement', 'protocol']}>*/}
          <Menu.Item key="1" disabled={true}>

              One

          </Menu.Item>
          {/*</CheckVisibleItem>*/}

          <Menu.Item key="2">
            <CheckVisibleItem serviceKeys={['statement', 'protocol']}>
              Two
            </CheckVisibleItem>
          </Menu.Item>
        </Menu>

        <Monitoring wsURL='/color' topicURL='/topic/color' />
      </div>
    )
  }
}
export default App
