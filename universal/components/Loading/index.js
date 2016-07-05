import React, { Component } from 'react';

//import styles
import css from './index.scss';

class Loading extends Component {
    render() {
        return (
            <div className="Loading">
                <img className="center-block" src={'/loading.gif'} alt="Loading"/>
            </div>
        );
    }
}

export default Loading;
