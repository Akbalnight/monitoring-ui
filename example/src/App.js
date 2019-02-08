import React, { Component } from 'react'

import { Monitoring } from 'monitoring-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <Monitoring wsURL='/monitoring' topicURL='/topic/services'/>
      </div>
    )
  }
}
