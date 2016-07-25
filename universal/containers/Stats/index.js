import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Boxes from '../../components/Boxes';

//Actions
import {getTotalSales,getSalesOK,getSalesWithBookingStatus, getTotalErrors, getUnknownErrors, getErrorsWithBookingStatus, getTotalAttemps,getTotalTokens}  from '../../actions/StatsActions'

const propTypes = {
    
};

class Stats extends Component {

    componentDidMount() {
        this.props.getTotalSales();
        this.props.getSalesOK();
        this.props.getSalesWithBookingStatus();
        this.props.getTotalErrors();
        this.props.getUnknownErrors();
        this.props.getErrorsWithBookingStatus();
        this.props.getTotalAttemps();
        this.props.getTotalTokens();
    }

    render() {
        return (

            <div className="Stats container" id="page-wrapper">
                <h1>Sei mai name, Sei mai name</h1>
                <div className="row">
                    <Boxes title={"Ventas"} type={"sales"}></Boxes>
                    <Boxes title={"Errores"} type={"errors"}></Boxes>
                    <Boxes title={"Totales"} type={"total"}></Boxes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getTotalSales,
        getSalesOK,
        getSalesWithBookingStatus,
        getTotalErrors,
        getUnknownErrors,
        getErrorsWithBookingStatus,
        getTotalAttemps,
        getTotalTokens
    }, dispatch);
};

Stats.propTypes = propTypes;
export default connect(mapStateToProps,mapDispatchToProps)(Stats);
