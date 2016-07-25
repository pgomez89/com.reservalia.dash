import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import css from './index.scss';
import Box from '../Box'


const propTypes = {
    title: PropTypes.string,
    type: PropTypes.string
};

class Boxes extends Component {

    render() {
        let boxes = this.props.boxes[this.props.type];

        let {title} = this.props;
        
        let boxesDOM = [];

        for(var key in boxes){
            var box = boxes[key];
            boxesDOM.push(<Box key={box.key} title={box.title} metric={box.metric} value={box.value}></Box>);
        }

        return (<div className="row Boxes">
            <h4>Box: {title}</h4>
            <div className="stats-container">
                {boxesDOM}
            </div>
        </div>);
    }
}


const mapStateToProps = state => {
    return {boxes: state.appReducers.boxes};
};

Boxes.propTypes = propTypes;
export default connect(mapStateToProps)(Boxes);
