import React, {Component} from 'react'
import PropTypes from 'prop-types'

import SockJsClient from 'react-stomp';

import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import './Monitoring.css'

class Monitoring extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        wsURL: PropTypes.string,
        topicURL: PropTypes.string,
    }
    state = {
        modalVisible: false,
        servicesState: []
    }

    modalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        const {
            wsURL = '/monitoring',
            topicURL = '/topic/services'
        } = this.props

        var that = this;

        return (
            <div className={'monitoring-services'}>
                <SockJsClient url={wsURL} topics={[topicURL]} onMessage={(msg) => {
                    console.log(wsURL);
                    console.log(topicURL);
                    that.setState({servicesState: msg});
                }} ref={(client) => {
                    this.clientRef = client
                }}/>

                <div onClick={() => this.modalVisible(true)}>Сервисы</div>
                <Modal
                    className={'monitoring-services-modal'}
                    title="Мониторинг состояния сервисов"
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.modalVisible(false)}
                    onCancel={() => this.modalVisible(false)}
                    footer={[ <Button key="submit" type="primary" onClick={() => this.modalVisible(false)}> OK </Button> ]}
                >
                    {this.state.servicesState.map(item =>
                        <div className={"line-service"} key={item.id}>
                            <div className={"line-service-head"}>{item.serviceName}</div>
                            {item.serviceStatus
                                ? <div className={"line-service-value-true"}><div>Работает</div> <div>Версия: {item.serviceVersion}</div> </div>
                                : <div className={"line-service-value-false"}>Не работает</div> }
                        </div>
                    )
                    }
                </Modal>
            </div>
        )
    }
}

export default Monitoring
