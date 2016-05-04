import React from 'react';

class InputDate extends React.Component {
  constructor(props){
    super(props)
  }

  handleChange(event){
    console.log(event.target.value);
  }

  render(){
    return (
      <input defaultValue={this.props.value}
             name={this.props.name}
             onChange={this.handleChange}
      />
    )
  }
}

export default InputDate
