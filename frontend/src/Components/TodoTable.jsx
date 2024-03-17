import * as React from 'react';
import { TableContainer } from "@material-ui/core"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteoutlineIcon from '@mui/icons-material/DeleteOutline'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import {Link} from "react-router-dom"
import "./Table.css"
import { useDispatch, useSelector } from 'react-redux';
import { DeleteTodo,updateTodo,deleteServer ,getAllServer } from '../actions';
import { useEffect } from 'react';


export default function TodoTable({setTodoId}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllServer());
      }, [dispatch]);

    const todoList = useSelector((state)=>state.allReducer.todoList)
    console.log('todoList', todoList)
  
    return (
        < div className='table'>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell >Task</TableCell>
                            <TableCell>Due Date</TableCell>
                            <TableCell >Update</TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                       {
                        todoList.map((ele)=>{
                          return  <TableRow key = {ele.id}>
                          <TableCell>{ele.title}</TableCell>
                          <TableCell >{ele.task}</TableCell>
                          <TableCell>{ele.dueDate}</TableCell>
                      <Link to='/'><TableCell ><BorderColorIcon onClick={()=>setTodoId(ele.id)}/></TableCell></Link>        
                          <TableCell ><DeleteoutlineIcon onClick={()=> dispatch(deleteServer(ele.id))}/></TableCell>
                      </TableRow>
                        })
                       }
                    </TableBody>
                </Table>
            </TableContainer>
           <Link to='/'>
            <Box display='flex' justifyContent='center' alignItems='center' component={Paper} mt={2} minHeight='2rem'>
            <AddIcon/>
            ADD TODO
            </Box></Link>
        </div>
    );
}
