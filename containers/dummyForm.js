import React from 'react'

import Form from '../components/form'
import { getFormValues, reset, initialize, destroy } from 'redux-form'

import { connect } from 'react-redux'
import CurrentFormState from '../components/currentFormState'
import img from '../assets/loader.gif'
import Button from 'material-ui/Button'
import addToFormList, { deleteFromFormList, editForm } from '../actions/form'

const initialData = {
  firstName: 'foo',
  lastName: 'bar',
  email: 'foobar@fuzz.com',
  sex: 'male',
  favoriteColor: 'Red',
  notes: 'awesome foo bar'
}

class SampleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formId: 0,
      loading: false,
      formEdited: false,
      modalOpen: false
    }
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  handleDelete(i){
    this.toggleModal();
    this.props.deleteFromFormList(i)
  }
  formHandler(value) {
    this.setState({
      loading: true
    })
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
        if (!this.state.formEdited) {
          value.id = this.state.formId
          this.props.addToFormList(value)
          this.setState({
            loading: false,
            formId: this.state.formId + 1
          })
        } else if (this.state.formEdited) {
          this.props.editForm(value)
          this.setState({
            loading: false,
            formEdited: false
          })
        }
        this.props.resetForm()
      })
  }
  editForm(formVal) {
    this.setState({
      formEdited: true
    })
    this.props.initializeForm(formVal)
  }
  render() {
    var submittedFormList = null
    var currentFormState = null

    if (this.props.formList.formList.length) {
      submittedFormList = this.props.formList.formList.map((form, i) => (
        <CurrentFormState
          formValue={form}
          key={i}
          action={true}
          onDelete={() => this.handleDelete()}
          onEdit={() => this.editForm(form)}
          handleOpen={() => this.toggleModal()}
          handleClose={() => this.toggleModal()}
          isModalOpen={this.state.modalOpen}
        />
      ))
    }
    if (this.props.formValue) {
      currentFormState = (
        <CurrentFormState
          formValue={this.props.formValue}
          isModalOpen={this.state.modalOpen}
        />
      )
    }
    return (
      <div>
        <Form
          onSubmit={this.formHandler.bind(this)}
          onload={() => this.props.initializeForm(initialData)}
        />
        <h2>Current Form State</h2>
        {currentFormState ? currentFormState : 'No data to show..'}
        <h2>Submitted Forms List</h2>
        {this.state.loading ? (
          <img src={img} id="loader" />
        ) : submittedFormList ? (
          submittedFormList
        ) : (
          'No data to show..'
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    formValue: getFormValues('MaterialUiForm')(state),
    formList: state.formList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    resetForm: () => dispatch(destroy('MaterialUiForm')),
    initializeForm: data =>
      dispatch(
        initialize('MaterialUiForm', data, {
          keepDirty: true
        })
      ),
    addToFormList: data => dispatch(addToFormList(data)),
    deleteFromFormList: id => dispatch(deleteFromFormList(id)),
    editForm: data => dispatch(editForm(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleForm)
