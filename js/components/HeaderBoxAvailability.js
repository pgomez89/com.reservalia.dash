import React, {Component} from 'react';

class HeaderBoxAvailability extends Component {
  render(){
    return(
      <li className="row">
        <div className="col-lg-2">Id</div>
        <div className="col-lg-4">Host</div>
        <div className="col-lg-2">Total Busquedas</div>
        <div className="col-lg-2">Sin Disponibilidad</div>
        <div className="col-lg-2">Porcentaje</div>
      </li>
    )
  }
}

export default HeaderBoxAvailability;
