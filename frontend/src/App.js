import './App.css';
// import Navbar from './Components/Navbar';
import Navbar from './Components/Navbar.jsx';
import TodoForm from './Components/TodoForm';
import "./Components/TodoForm.css"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import TodoTable from './Components/TodoTable.jsx';
import { useState } from 'react';
function App() {
  const [todoId, setTodoId]  = useState(null);
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<TodoForm todoId={todoId} setTodoId={setTodoId}/> }/>
      <Route path='/Products' element={<TodoTable setTodoId={setTodoId}/> }/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
