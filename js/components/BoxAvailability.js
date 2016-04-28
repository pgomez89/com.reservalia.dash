import React, {Component} from 'react';
import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';

class BoxAvailability extends Component {
  render() {
    return(
      <ul className="row box-list">
        <HeaderBoxAvailability />
        {
          this.props.listado.slice(0,10).map((hotel) => {
            return <RowAvailability  host={hotel.host}
                                     id={hotel.id}
                                     total={hotel.total}
                                     sinDisponibilidad={hotel.sinDisponibilidad} />
          })
        }
      </ul>
    )
  }
}

export default BoxAvailability;
