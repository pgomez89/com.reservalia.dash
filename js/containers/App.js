import React, {Component} from 'react';
import BoxAvailability from '../components/BoxAvailability';
import NavBar from '../components/NavBar';
import hoteles from '../../hoteles';

class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <BoxAvailability listado={hoteles} />
      </div>
    )
  }
}

export default App;
