import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';

import * as PulseActions from '../actions/PulseActions';

class MonitorApp extends Component {
  static propTypes = {
    isWorking: React.PropTypes.bool,
    error: React.PropTypes.any,
  };

  render() {
    let actions = { 
      editEvent: this.props.editEvent, 
      deleteEvent: this.props.deleteEvent
    };

    return (
      <div className="Pulse-Container">
        <Header/>
      </div>
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    isWorking: state.pulseApp.isWorking,
    error: state.pulseApp.error
  }), 
  dispatch => bindActionCreators(PulseActions, dispatch)
)(MonitorApp);
