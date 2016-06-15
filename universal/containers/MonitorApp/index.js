import React, { Component, PropTypes } from 'react';

//import components
import NavBar from '../../components/NavBar';
import AvailabilityBox from '../../containers/AvailabilityBox';

const propTypes = {
};

class MonitorApp extends Component {
  render() {
    return (
        <div className="MonitorApp" id="wrapper">
          <NavBar />
            {this.props.dashboard}
            {this.props.availability}
        </div>
    );
  }
}

MonitorApp.propTypes = propTypes;
export default MonitorApp;
