import { UPDATE_AUTH, SET_VISIBILITY_FILTER, VisibilityFilters } from '../Actions/actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  auth: false
}
​


function checkAuthApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      case UPDATE_AUTH:
        return Object.assign({}, state, {
            
        })
      default:
        return state
    }

    
  }