import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Boxes from '../../components/Boxes';

const propTypes = {
    
};

class Stats extends Component {
    render() {
        return (
            <div className="Stats" id="page-wrapper">
                <h1>El panel</h1>
                <Boxes title={"Ventas"} type={"sales"}></Boxes>
                <Boxes title={"Errores"} type={"errors"}></Boxes>
                <Boxes title={"Totales"} type={"total"}></Boxes>
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
