import * as actionType from '../ActionTypes'

export default function addToFormList(payload) {
  return {
    type: actionType.ADD_TO_FORM_LIST,
    payload: payload
  }
}
export function deleteFromFormList(id) {
  return {
    type: actionType.DELETE_FROM_FORM_LIST,
    id: id
  }
}
export function editForm(formData) {
  return {
    type: actionType.EDIT_FORM,
    formData: formData
  }
}
