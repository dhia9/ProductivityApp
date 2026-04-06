import Button from '@mui/material/Button';
import { useState } from 'react';

export default function CheckToggle({ setCheckedTodos, setListTodos, checkedTodos, buttonSx }: any) {
  const [applychecked, setApplyChecked] = useState(false);
  // display: 'flex', flexDirection: 'row', justifyContent: 'center' 
  // marginTop: 2, marginLeft: 5 
  return (<div style={{}}>
    <Button variant="outlined" sx={{...buttonSx,marginRight: 0.5}} onClick={() => {
      if (!applychecked) {
        setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => true))
      }

      else {
        setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => false))
      };
      setApplyChecked((prevApplyChecked: boolean) => !prevApplyChecked);

    }}>{applychecked ? 'uncheck all' : 'check all'}</Button>
    <Button variant="outlined" sx={{...buttonSx,}} onClick={() => setListTodos((prevListTodos: string[]) => {
      const filteredTodos = prevListTodos.filter((_, i) => !checkedTodos[i]);
      setCheckedTodos(checkedTodos.filter((value: boolean) => !value));
      return filteredTodos;
    })}> delete the Selected Todos</Button></div>)
  // marginTop: 2, marginLeft: 3 
}