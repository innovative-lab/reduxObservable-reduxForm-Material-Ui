import React from 'react'
import { Field, reduxForm } from 'redux-form'
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
} from 'material-ui/Form';
import './form.css';


const renderTextField = ({ input, label, ...custom }) => (
  <TextField label={label} {...input} {...custom} />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label} checked={input.value ? true : false} />
)

const renderRadioGroup = ({ input, ...rest }) => (
  <FormControl>
    <FormLabel>Gender</FormLabel>
    <RadioGroup
      {...input}
      {...rest}
      onChange={(event, value) => input.onChange(value)}>
      {' '}
      <FormControlLabel
        control={<Radio value="male" label="male" />}
        label="Male"
      />
      <FormControlLabel
        control={<Radio value="female" label="female" />}
        label="Female"
      />
    </RadioGroup>
  </FormControl>
)

const renderSelectField = ({ input, label, children, ...custom }) => (
  <FormControl>
    <FormLabel>Fav Color</FormLabel>
    <Select
      value={event && event.target ? event.target.value : ''}
      {...input}
      onChange={event => input.onChange(event.target.value)}
      children={children}
      {...custom}
    />
  </FormControl>
)


const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className='form_el'>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div className='form_el'>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div className='form_el'>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div className='form_el'>
        <Field name="sex" component={renderRadioGroup} />
      </div>
      <div className='form_el'>
        <Field
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color">
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

      <div className='form_el'>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          rows={2}
        />
      </div>
      <div className='form_el'>
        <Button
          type="submit"
          variant="raised"
          disabled={pristine || submitting}
          color="primary">
          Submit
        </Button>
        <Button
          type="button"
          variant="raised"
          disabled={pristine || submitting}
          onClick={reset}
          color="secondary">
          Clear Values
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm' // a unique identifier for this form
})(MaterialUiForm)
