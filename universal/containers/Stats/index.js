import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Boxes from '../../components/Boxes';

//Actions
import {getTotalSales,getSalesOK,getSalesWithBookingStatus}  from '../../actions/StatsActions'

const propTypes = {
    
};

class Stats extends Component {

    componentDidMount() {
        this.props.getTotalSales();
        this.props.getSalesOK();
        this.props.getSalesWithBookingStatus();
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
        getSalesWithBookingStatus
    }, dispatch);
};

Stats.propTypes = propTypes;
export default connect(mapStateToProps,mapDispatchToProps)(Stats);
