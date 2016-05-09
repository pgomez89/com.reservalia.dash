import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormDateActions from '../actions/FormDateActions';
import styles from '../../css/app.css';

import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';

class FormDate extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {dispatch, startDate, endDate,data} = this.props;
    const actions = bindActionCreators(FormDateActions, dispatch);

    const getAvailability = () => {
      fetch('http://www.mocky.io/v2/5723a664250000c708e2ed37')
        .then(response => response.json())
        .then(data => actions.getDataAvailabilty(data))
        .catch(error => {
          console.error(error)
        });
    };

    return (
      <main className="container">
        <div className="row">
          <button onClick={getAvailability}>
            Buscar
          </button>
          <input type="text"
                 value={startDate.value}
                 name={startDate.name}
                 onChange={e => this.actions.chargeInput(e.target.value,e.target.name)}/>

          <input type="text"
                 value={endDate.value}
                 name={endDate.name}
                 onChange={e => this.actions.chargeInput(e.target.value,e.target.name)}/>
        </div>
        <ul className="row box-list">

          <HeaderBoxAvailability />
          {
            data.map((elem) => {
              return <RowAvailability key={elem.id}
                                      host={elem.host}
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

export default connect(state => state.FormDateReducer)(FormDate)
