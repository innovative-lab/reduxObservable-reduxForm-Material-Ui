import React from 'react'

import Form from '../components/form'

class SampleForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      formValues : null
    }
  }
  
  formHandler(value){
    this.setState({
      formValues:JSON.stringify(value)
    })
    console.log("formValues",this.formValues)
  }
  render(){
    return (
      <div>
        <Form onSubmit={this.formHandler.bind(this)}/>
        {this.state.formValues}
      </div>
    )
  }
  
}

export default SampleForm;


