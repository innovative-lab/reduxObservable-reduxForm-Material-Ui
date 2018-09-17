import * as actionType from '../ActionTypes'

const initialState = {
  formList: []
}

export default function formListReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_TO_FORM_LIST:
      return {
        ...state,
        formList: state.formList.concat(action.payload)
      }
    case actionType.DELETE_FROM_FORM_LIST:
      state.formList.splice(action.id, 1)
      return {
        ...state,
        formList: state.formList
      }
    case actionType.EDIT_FORM:
      var editedForm = state.formList.map(item => {
        if (item.id === action.formData.id) {
          return { ...item, ...action.formData }
        }
        return item
      })
      return {
        ...state,
        formList: editedForm
      }
    default:
      return state
  }
}
