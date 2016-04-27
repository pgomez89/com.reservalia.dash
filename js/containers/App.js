import React, {Component} from 'react';
import BoxAvailability from '../components/BoxAvailability';

const hoteles = [
  {'www.serenabuzios.com.ar': { id: '245530', sinDisponibilidad: '341', total: '785' }},
  {'www.hotelmonserratba.com': { id: '331131', sinDisponibilidad: '127', total: '437' }},
  {'www.altoandinohotel.com': { id: '310438', sinDisponibilidad: '108', total: '197' }}
];

class App extends Component {
  render(){
    return(
      <BoxAvailability listado={hoteles} />
    )
  }
}

export default App;
