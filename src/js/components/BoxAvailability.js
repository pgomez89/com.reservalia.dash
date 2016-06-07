import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BoxAvailabilityActions from '../actions/BoxAvailabilityActions';
import {formatDate} from '../libs/lib';
import NavBar from './NavBar/NavBar';
import HeaderBoxAvailability from './HeaderBoxAvailability';
import RowAvailability from './RowAvailability';
import style from '../../css/app.css';

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
      <main className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-lg-12 buscador-fecha">
            <form className="form-inline">
              <div className="form-group">
                <label className="label-margin">Desde:</label>
                <input className="form-control"
                       type="text"
                       value={startDate.value}
                       name={startDate.name}
                       onChange={e => actions.chargeInput(e.target.value,e.target.name)}/>
              </div>
              <div className="form-group">
                <label className="label-margin">A:</label>
                <input className="form-control"
                       type="text"
                       value={endDate.value}
                       name={endDate.name}
                       onChange={e => actions.chargeInput(e.target.value,e.target.name)}/>
              </div>
              <button className="btn btn-success"
                      onClick={e => { e.preventDefault();
                      getAvailability(startDate.value,endDate.value)}}>
                Buscar
              </button>
            </form>
          </div>
        </div>
        <table id="table_id" className="table table-striped table-dispo">
          <thead>
          <tr>
            <th className="head-sort" onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'id');
            }}>Id ▾▴
            </th>
            <th>Host</th>
            <th className="head-sort" onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'total');
            }}>Total Busquedas ▾▴
            </th>
            <th className="head-sort" onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'sinDisponibilidad');
            }}>Sin Disponibilidad ▾▴
            </th>
            <th className="head-sort" onClick={e => {
              e.preventDefault();
              actions.sortData(data.content,data.sort,'porcentaje');
            }}>% ▾▴
            </th>
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
