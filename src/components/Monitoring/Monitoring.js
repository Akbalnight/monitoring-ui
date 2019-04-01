import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Modal, Button} from 'antd'
import './Monitoring.css'

import {connect} from 'react-redux'

import {setStateServices} from '../../actions'

class Monitoring extends Component {
  static propTypes = {
    wsURL: PropTypes.string,
    topicURL: PropTypes.string
  }
  state = {
    modalVisible: false
  }

  modalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  onConnect(p) {
    console.log()
  }

  onMessage(msg) {
    // console.log(wsURL)
    // console.log(topicURL)
    this.props.setStateServices({servicesState: msg})
    this.setState({servicesState: msg})
  }

  // setStateServices = (servicesState) => ({type: SET_STATE_SERVICES, servicesState: servicesState});

  render() {
    const {
      wsURL = '/monitoring',
      topicURL = '/topic/services'
    } = this.props

    //console.log(this.props.servicesStateStore);

    return (
      <div className={'monitoring-services'}>

        <div onClick={() => this.modalVisible(true)}>Сервисы</div>
        <Modal
          className={'monitoring-services-modal'}
          title='Мониторинг состояния сервисов'
          centered
          visible={this.state.modalVisible}
          onOk={() => this.modalVisible(false)}
          onCancel={() => this.modalVisible(false)}
          footer={[<Button key='submit' type='primary' onClick={() => this.modalVisible(false)}> OK </Button>]}
        >
          {this.props.servicesStateStore.servicesState && this.props.servicesStateStore.servicesState.map(item =>
            <div className={'line-service'} key={item.id}>
              <div className={'line-service-head'}>{item.serviceName}</div>
              {item.serviceStatus
                ? <div className={'line-service-value-true'}>
                  <div>Работает</div>
                  <div>Версия: {item.serviceVersion}</div>
                </div>
                : <div className={'line-service-value-false'}>Не работает</div>}
            </div>
          )
          }
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  servicesStateStore: store.services
})

export default connect(mapStateToProps, {setStateServices})(Monitoring)
