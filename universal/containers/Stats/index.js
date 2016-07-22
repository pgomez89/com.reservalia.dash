import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Boxes from '../../components/Boxes';

const propTypes = {};

class Stats extends Component {
    render() {
        return (
            <div className="Stats" id="page-wrapper">
                <h1>Stats</h1>
                <Boxes></Boxes>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

Stats.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stats);
