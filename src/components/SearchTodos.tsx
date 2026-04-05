
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';


export default function SearchTodos({setCheckedTodos}:any) {
  const [applychecked, setApplyChecked] = useState(false);
  return (<>
    <Button variant="outlined" sx={{display: 'block',margin:'auto',marginTop:2}} onClick={()=>{
      if (!applychecked){
      setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => true))}
      
      else {
        setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => false))
      };
      setApplyChecked((prevApplyChecked: boolean) => !prevApplyChecked);
      
    }}>{applychecked ? 'uncheck all' : 'check all'}</Button>
     <Box sx={{ width: 500, maxWidth: '100%',margin:'auto',marginTop:2 }}>
      <TextField fullWidth label="search in the Todos" id="fullWidth" />
    </Box></>)}