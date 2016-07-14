import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import components
import NavBar from '../../components/NavBar';
import AvailabilityBox from '../../containers/AvailabilityBox';

const propTypes = {
    children: React.PropTypes.object,
    monitor: React.PropTypes.object
};

class MonitorApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {monitor, children} = this.props;
        return (
            <div className="MonitorApp" id="wrapper">
                <NavBar data={monitor}/>
                {children}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {monitor: state.appReducers.monitor};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

MonitorApp.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(MonitorApp);
