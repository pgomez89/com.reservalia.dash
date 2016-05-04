import React from 'react';
import InputDate from './InputDate';

class FormDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        nameInicio: "inicio",
        nameFin: "fin"
    };
  }

  getToday() {
    var today = new Date();
    return today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  }

  getOneMonthAgo() {
    var today = new Date();
    var month = today.getMonth() - 1;
    return today.getDate() + "/" + month + "/" + today.getFullYear();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }


  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>

        <InputDate name={this.state.nameInicio}
                   value={this.getToday()}/>

        <InputDate name={this.state.nameFin}
                   value={this.getOneMonthAgo()}/>

        <input type="submit" value="Buscar"/>
      </form>
    )
  }
}

export default FormDate;
