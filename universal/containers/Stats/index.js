import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Boxes from '../../components/Boxes';

//Actions
import {getTotalSales,getSalesOK,getSalesWithBookingStatus, getTotalErrors, getUnknownErrors, getErrorsWithBookingStatus, getTotalAttemps,getTotalTokens}  from '../../actions/StatsActions'

const propTypes = {
    
};

class Stats extends Component {
    //http://stackoverflow.com/questions/26348557/issue-accessing-state-inside-setinterval-in-react-js
    runMetrics(){
        this.props.getTotalSales();
        this.props.getSalesOK();
        this.props.getSalesWithBookingStatus();
        this.props.getTotalErrors();
        this.props.getUnknownErrors();
        this.props.getErrorsWithBookingStatus();
        this.props.getTotalAttemps();
        this.props.getTotalTokens();
    }

    componentDidMount() {
        setInterval(()=>{
            this.runMetrics();
            console.log("RUNNING METRICS");
        },100000);
        this.runMetrics();
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
