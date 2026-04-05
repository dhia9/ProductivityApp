
import Button from '@mui/material/Button';
import {useState} from 'react';


export default function CheckToggle({setCheckedTodos}:any) {
  const [applychecked, setApplyChecked] = useState(false);
  return (<>
    <Button variant="outlined" sx={{display: 'block',margin:'auto',marginTop:2}} onClick={()=>{
      if (!applychecked){
      setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => true))}
      
      else {
        setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => false))
      };
      setApplyChecked((prevApplyChecked: boolean) => !prevApplyChecked);
      
    }}>{applychecked ? 'uncheck all' : 'check all'}</Button></>)}