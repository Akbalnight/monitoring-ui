import React, { Component } from 'react'

import { Monitoring, MonitoringProvider, CheckVisibleItem } from 'monitoring-ui'

import {Menu} from 'antd'
import {connect} from "react-redux";

class App extends Component {
    componentDidMount() {
        // MonitoringConnect()
    }
  render () {
    return (
        <MonitoringProvider>
          <div>
            <Menu>
              { CheckVisibleItem(this.props.servicesStateStore.servicesState, [['statement', 'protocol'], ['reports', 'reglament']])
                ? <Menu.Item> Two </Menu.Item>
                  : null }
              {/*</CheckVisibleItem>*/}
            </Menu>
            <Monitoring />
          </div>
        </MonitoringProvider>
    )
  }
}
const mapStateToProps = (store) => ({
    servicesStateStore: store.services
})

export default connect(mapStateToProps)(App)
