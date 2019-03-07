import React, { Component } from 'react'
import {connect} from 'react-redux'

class CheckVisibleItem extends Component {
  render() {
    var serviceKeys = this.props.serviceKeys
    var result = []

    // Перебор массивов ключей
    for (var k = 0; k < serviceKeys.length; k++) {
      var oneListKeys = serviceKeys[k]
      var oneResult = []

      // Перебор ключей
      for (var i = 0; i < oneListKeys.length; i++) {
        var key = oneListKeys[i]

        // Перебор сервисов в сторе
        for (var j = 0; j < this.props.servicesStateStore.servicesState.length; j++) {
          var service = this.props.servicesStateStore.servicesState[j]

          // Поиск ключей в сторе
          if (key === service.serviceKey) oneResult.push(service.serviceStatus)
        }
      }

      result.push(oneResult)
    }

    // console.log('result: ', result)
    // Поиск результатов для логических групп
    var subRes = [];
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].length; j++) {
        if (!result[i][j]) { subRes.push(false); break }
        else if (j === result[i].length - 1) subRes.push(true)
      }
    }

    // console.log('subRes: ', subRes);
    // Посик итоговых результатов
    for (var i = 0; i < subRes.length; i++) {
      if (subRes[i]) return this.props.children
    }

    return null
  }

}

const mapStateToProps = (store) => ({
  servicesStateStore: store.services
})

export default connect(mapStateToProps)(CheckVisibleItem)
