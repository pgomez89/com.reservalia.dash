import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Boxes from '../../components/Boxes';

//Actions
import * as metrics  from '../../actions/StatsActions'

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
        this.interval = setInterval(()=>{
            this.runMetrics();
            console.log("RUNNING METRICS");
        },10000);
        this.runMetrics();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
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
    return bindActionCreators(metrics, dispatch);
};

Stats.propTypes = propTypes;
export default connect(mapStateToProps,mapDispatchToProps)(Stats);
