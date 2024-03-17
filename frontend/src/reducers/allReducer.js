const initialInput = {
    todoList: [],
    isregistred:false
}
const allReducer = (state = initialInput, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList,action.payload]
            }

        case 'DELETE_TODO':
            return {
                ...state,
            }

         case 'GET_ALL_DATA' :return {
         ...state,
         todoList:action.payload
     }
        case "UPDATE_TODO":
            return {
                ...state,
            }
        case "REGISTER":
            return {
            ...state,
           isregistred: action.payload
            }

        default:
            return state
    }

}

export default allReducer
