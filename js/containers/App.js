import React, {Component} from 'react';
import BoxAvailability from '../components/BoxAvailability';
import NavBar from '../components/NavBar';
import FormDate from '../components/FormDate';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FormDate />
        <BoxAvailability />
      </div>
    )
  }
}

export default App;
