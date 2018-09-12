import React from 'react'

import Form from '../components/form'

class SampleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: null
    }
  }

  formHandler(value) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        formValue: value,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          formValues: JSON.stringify(value)
        })
      })
    
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.formHandler.bind(this)} onReset = {this.resetHandler.bind(this)}/>
        {this.state.formValues}
      </div>
    )
  }
}

export default SampleForm
