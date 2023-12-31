// selectors
export const getIsError = ({ isError }) => {
	return isError
}

// actions
const createActionName = actionName => `app/error/${actionName}`
const SET_ERROR = createActionName('SET_ERROR')

// action creators
export const setError = payload => ({ type: SET_ERROR, payload })

// reducer
const isErrorReducer = (statePart = false, action) => {
	switch (action.type) {
		case SET_ERROR:
			return action.payload
		default:
			return statePart
	}
}

export default isErrorReducer