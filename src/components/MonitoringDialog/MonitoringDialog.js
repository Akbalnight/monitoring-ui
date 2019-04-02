import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Modal, Button} from 'antd'
import { MonitoringContext } from '../../context'
import './MonitoringDialog.css'

class MonitoringDialog extends Component {
  static propTypes = {
    onOKButtonClick: PropTypes.func
  }

  static defaultProps = {
    onOKButtonClick: () => null
  }

  render() {
    const {
      onOKButtonClick,
      ...modalProps
    } = this.props

    return (
      <Modal
        className='monitoring-services-modal'
        title='Мониторинг состояния сервисов'
        centered
        footer={[(
          <Button
            key='submit'
            type='primary'
            onClick={onOKButtonClick}
          >
            OK
          </Button>
        )]}
        {...modalProps}
      >
        <MonitoringContext.Consumer>
          {({ monitoringItems }) => {
            return monitoringItems.map(item => (
              <div className='line-service' key={item.id}>
                <div className='line-service-head'>{item.serviceName}</div>
                {item.serviceStatus ? (
                  <div className='line-service-value-true'>
                    <div>Работает</div>
                    <div>Версия: {item.serviceVersion}</div>
                  </div>
                ) : <div className='line-service-value-false'>Не работает</div>}
              </div>
            ))
          }}
        </MonitoringContext.Consumer>
      </Modal>
    )
  }
}

export default MonitoringDialog
