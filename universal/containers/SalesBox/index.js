import React, { Component, PropTypes } from 'react';

//import components
import Table from '../../components/Table';
import SearchBoxDate from '../../components/SearchBoxDate';

const propTypes = {};

class SalesBox extends Component {
  render() {
    return (
        <div className="AvailabilityBox" id="page-wrapper">
          <SearchBoxDate />
          <Table />
        </div>
    );
  }
}

SalesBox.propTypes = propTypes;
export default SalesBox;
