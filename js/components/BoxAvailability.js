import React, {Component} from 'react';
import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';

class BoxAvailability extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    fetch('/dispo')
      .then(response => response.json())
      .then(data => this.setState({data: data}))
      .catch(function (error) {
        console.log('Request failed', error)
      });
  }

  render() {
    return (
      <ul className="row box-list">
        <HeaderBoxAvailability />
        {
          this.state.data.map((hotel) => {
            return <RowAvailability host={hotel.host}
                                    id={hotel.id}
                                    total={hotel.total}
                                    sinDisponibilidad={hotel.sinDisponibilidad}/>
          })
        }
      </ul>
    )
  }
}

export default BoxAvailability;
