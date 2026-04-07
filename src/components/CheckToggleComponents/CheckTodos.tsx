import Button from '@mui/material/Button';
export default function CheckTodos({ setCheckedTodos,applychecked,setApplyChecked, buttonSx }: { setCheckedTodos: any, applychecked: boolean, setApplyChecked:any, buttonSx: Record<string, any> }) {
  return (<>
   <Button variant="outlined" sx={{ ...buttonSx, marginRight: 0.5 }} onClick={() => {
         if (!applychecked) {
           setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => true))
         }
   
         else {
           setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => false))
         };
         setApplyChecked(!applychecked);
   
       }}>{applychecked ? 'uncheck all' : 'check all'}</Button></>)}