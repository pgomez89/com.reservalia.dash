import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

        return (<div className={css.Boxes}>
            <h1>{title}</h1>
            <div className="stats-container">
                {boxes.map(function(box) {
                    return <Box key={box.key} title={box.title} metric={box.metric}></Box>;
                })}
            </div>
        </div>);
    }
}


const mapStateToProps = state => {
    return {boxes: state.appReducers.boxes};
};

Boxes.propTypes = propTypes;
export default connect(mapStateToProps)(Boxes);
