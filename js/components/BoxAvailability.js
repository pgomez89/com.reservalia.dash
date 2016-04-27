import React, {Component} from 'react';
import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';

class BoxAvailability extends Component {
  render() {
    return(

      <ul className="row box-list">
        <HeaderBoxAvailability />
        {
          this.props.listado.map((hotel) => {
            return <RowAvailability  host={Object.keys(hotel)[0]}
                                     id={hotel[Object.keys(hotel)[0]].id}
                                     total={hotel[Object.keys(hotel)[0]].total}
                                     sinDisponibilidad={hotel[Object.keys(hotel)[0]].sinDisponibilidad} />
          })
        }
      </ul>
    )
  }
}

export default BoxAvailability;
