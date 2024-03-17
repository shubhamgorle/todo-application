import axios from 'axios'
export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
            // id: new Date().getTime().toString(),
    }
}

export const updateTodo = () => {
    return {
        type: "UPDATE_TODO",
    }
}

export const DeleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    }
}

export const register = (payload)=>{
    return {
        type: "REGISTER",
        payload: payload
    }
}
export const getAllData = (data)=>{
   return {
    type: "GET_ALL_DATA",
    payload:
        data 
   }
}

export const AddtodoServer = ((todo)=>{
     return async (dispatch)=>{
      try {
        const response = await axios.post("http://localhost:8000/todoList", todo);
        const newTodo = response.data;
        dispatch(addTodo(newTodo));
      } catch (error) {
        console.log(error)
      }
     }
})

export const deleteServer =((id)=>{
      return async(dispatch)=>{
          try {
             await axios.delete(`http://localhost:8000/todoList/${id}`);
          const res =   await axios.get("http://localhost:8000/todoList");
            dispatch(getAllData(res.data))
          } catch (error) {
              console.log(error)
          }
      }
})

export const getAllServer = ()=>{
    return async(dispatch)=>{
        try {
            const res = await axios.get("http://localhost:8000/todoList");
            dispatch(getAllData(res.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateServer =((todoId,inputData)=>{
    return async(dispatch)=>{
    await axios.put(`http://localhost:8000/todoList/${todoId}`, inputData);
    const res =   await axios.get("http://localhost:8000/todoList");
    dispatch(getAllData(res.data))
    dispatch(updateTodo())
    }
})