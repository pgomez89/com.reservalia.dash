import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BoxAvailabilityActions from '../actions/BoxAvailabilityActions';

import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';

class BoxAvailability extends Component {

  constructor(props) {
    super(props);
    const {dispatch, startDate, endDate} = this.props;
    const actions = bindActionCreators(BoxAvailabilityActions, dispatch);

    fetch('/disponibilidad' + '/' + startDate.value + '/' + endDate.value)
      .then(response => response.json())
      .then(data => actions.getDataAvailabilty(data))
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const {dispatch, startDate, endDate,data} = this.props;
    const actions = bindActionCreators(BoxAvailabilityActions, dispatch);

    const getAvailability = (startDate, endDate) => {
      fetch('/disponibilidad' + '/' + startDate + '/' + endDate)
        .then(response => response.json())
        .then(data => actions.getDataAvailabilty(data))
        .catch(error => {
          console.error(error)
        });
    };

    return (
      <main className="container">
        <div className="row">
          <button onClick={e => {
          e.preventDefault();
          getAvailability(startDate.value,endDate.value)}}>
            Buscar
          </button>
          <input type="text"
                 value={startDate.value}
                 name={startDate.name}
                 onChange={e => actions.chargeInput(e.target.value,e.target.name)}/>

          <input type="text"
                 value={endDate.value}
                 name={endDate.name}
                 onChange={e => actions.chargeInput(e.target.value,e.target.name)}/>
        </div>
        <ul className="row box-list">
          <HeaderBoxAvailability />
          {
            data.map((elem) => {
              return <RowAvailability host={elem.host}
                                      id={elem.id}
                                      total={elem.total}
                                      sinDisponibilidad={elem.sinDisponibilidad}/>
            })
          }
        </ul>
      </main>
    );
  }
}

export default connect(state => state.BoxAvailabilityReducer)(BoxAvailability)
