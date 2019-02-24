import React, { Component } from 'react'
import {setStateServices} from '../../actions'
import {connect} from 'react-redux'

class CheckVisibleItem extends Component {
  hasAccess = (keys) => {

    console.log('keys: ', keys);
    var result = []

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      for (var j = 0; j < this.props.servicesStateStore.servicesState.length; j++) {
        var service = this.props.servicesStateStore.servicesState[j]
        if (key === service.serviceKey) result.push(service.serviceStatus)
      }
    }

    // console.log('result: ', result);
    for (var i = 0; i < result.length; i++) {
      console.log('item: ', result[i]);
      if (!result[i]) return false
    }
    return true;
  };

  render() {
    if (this.hasAccess(this.props.serviceKeys)) {
      console.log('children');
      return this.props.children
    } else {
      // console.log('null');
      return null
    }
  }
}

const mapStateToProps = (store) => ({
  servicesStateStore: store.ServicesReducer
})

export default connect(mapStateToProps)(CheckVisibleItem)
