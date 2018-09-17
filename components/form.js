import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import Radio, { RadioGroup } from 'material-ui/Radio'
import Checkbox from 'material-ui/Checkbox'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form'
import './form.css'

const required = value => (value ? undefined : 'Required');
const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined);
const renderTextField = ({ input, label, ...custom ,meta:{touched,error}}) => (
  <div >
    <TextField label={label} {...input} {...custom} />
    <div className='error'>{touched && (error && <span>{error}</span>)}</div>
    
  </div>
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label} checked={input.value ? true : false} />
)

const renderRadioGroup = ({ input, ...rest ,meta:{touched,error}}) => (
  <FormControl>
    <FormLabel>Gender</FormLabel>
    <RadioGroup
      {...input}
      {...rest}
      onChange={(event, value) => input.onChange(value)}>
      {' '}
      <FormControlLabel
        control={<Radio value="male" checked={input.value === 'male'} />}
        label="Male"
      />
      <FormControlLabel
        control={<Radio value="female" checked={input.value === 'female'} />}
        label="Female"
      />
    </RadioGroup>
    <div className='error'>{touched && (error && <span>{error}</span>)}</div>
  </FormControl>
)

const renderSelectField = ({ input, label, children, ...custom ,meta:{touched,error}}) => (
  <FormControl>
    <FormLabel>Fav Color</FormLabel>
    <Select
      value={event && event.target ? event.target.value : ''}
      {...input}
      onChange={event => input.onChange(event.target.value)}
      children={children}
      {...custom}
    />
    <div className='error'>{touched && (error && <span>{error}</span>)}</div>
  </FormControl>
)

let MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting, dirty, destroy } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form_el">
        <Button type="button" variant="raised" onClick={props.onload}>
          Load value
        </Button>
      </div>
      <div className="form_el">
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
          validate = {required}
        />
      </div>
      <div className="form_el">
        <Field name="lastName" component={renderTextField} label="Last Name" validate = {required}/>
      </div>
      <div className="form_el">
        <Field name="email" component={renderTextField} label="Email" validate = {required, email}/>
      </div>
      <div className="form_el">
        <Field name="sex" component={renderRadioGroup} />
      </div>
      <div className="form_el">
        <Field
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color" >
          <MenuItem value="Red" label="Red">
            Red
          </MenuItem>
          <MenuItem value="Green" label="Green">
            Green
          </MenuItem>
          <MenuItem value="Blue" label="Blue">
            Blue
          </MenuItem>
        </Field>
      </div>

      <div className="form_el">
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          rows={2}
          validate = {required}
        />
      </div>
      <div className="form_el">
        <Button
          type="submit"
          variant="raised"
          disabled={!dirty || submitting}
          color="primary">
          Submit
        </Button>
        <Button
          type="button"
          variant="raised"
          disabled={!dirty || submitting}
          onClick={reset}
          color="secondary">
          Clear Values
        </Button>
      </div>
    </form>
  )
}

MaterialUiForm = reduxForm({ form: 'MaterialUiForm' })(MaterialUiForm)

const selector = formValueSelector('MaterialUiForm')
MaterialUiForm = connect(state => {
  const formValues = selector(state, 'firstName', 'lastName', 'email')
  // console.log('selector', formValues)
  return {
    formValues
  }
})(MaterialUiForm)
export default MaterialUiForm
