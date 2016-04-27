import React, {Component} from 'react';

class RowAvailability extends Component {
  render() {
    return (
      <li className="row">
        {console.log(this.props)}
        <div className="col-lg-2">{this.props.id}</div>
        <div className="col-lg-4">{this.props.host}</div>
        <div className="col-lg-2">{this.props.total}</div>
        <div className="col-lg-2">{this.props.sinDisponibilidad}</div>
        <div className="col-lg-2">{Math.round((this.props.sinDisponibilidad / this.props.total)*100)}%</div>
      </li>
    )
  }
}

export default RowAvailability;
