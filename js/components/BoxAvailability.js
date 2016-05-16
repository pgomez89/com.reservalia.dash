import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BoxAvailabilityActions from '../actions/BoxAvailabilityActions';
import {formatDate} from '../libs/lib';
import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';

class BoxAvailability extends Component {

  constructor(props) {
    super(props);
    const {dispatch, startDate, endDate} = this.props;
    const actions = bindActionCreators(BoxAvailabilityActions, dispatch);
    fetch('/disponibilidad' + '/' + formatDate(startDate.value) + '/' + formatDate(endDate.value))
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
      fetch('/disponibilidad' + '/' + formatDate(startDate) + '/' + formatDate(endDate))
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
                 value={endDate.value}
                 name={endDate.name}
                 onChange={e => actions.chargeInput(e.target.value,e.target.name)}/>
          <input type="text"
                 value={startDate.value}
                 name={startDate.name}
                 onChange={e => actions.chargeInput(e.target.value,e.target.name)}/>
        </div>
        <table id="table_id" className="table table-striped">
          <thead>
          <tr>
            <th onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'id');
            }}>Id ▾▴</th>
            <th>Host</th>
            <th onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'total');
            }}>Total Busquedas ▾▴
            </th>
            <th onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'sinDisponibilidad');
            }}>Sin Disponibilidad ▾▴</th>
            <th onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'porcentaje');
            }}>% ▾▴</th>
          </tr>
          </thead>
          <tbody>
          {
            data.content.map((elem) => {
              return (
                <tr>
                  <th>{elem.id}</th>
                  <td>{elem.host}</td>
                  <td>{elem.total}</td>
                  <td>{elem.sinDisponibilidad}</td>
                  <td>{elem.porcentaje + '%'}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </main>
    );
  }
}

export default connect(state => state.BoxAvailabilityReducer)(BoxAvailability)
