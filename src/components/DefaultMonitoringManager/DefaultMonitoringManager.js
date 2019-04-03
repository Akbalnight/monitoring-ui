import React, { Component, Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types';
import { MonitoringDialog } from '../MonitoringDialog'

class DefaultMonitoringManager extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    className: '',
    children: null,
  }

  state = {
    isVisible: false
  }

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal() {
    this.setState({ isVisible: false })
  }

  openModal() {
    this.setState({ isVisible: true })
  }

  render() {
    const { children, className } = this.props
    const { isVisible } = this.state
    return (
      <Fragment>
        <div
          onClick={this.openModal}
          className={classnames(className)}
        >
          {children}
        </div>
        <MonitoringDialog
          visible={isVisible}
          onOKButtonClick={this.closeModal}
          onCancel={this.closeModal}
        />
      </Fragment>
    );
  }
}

export default DefaultMonitoringManager
