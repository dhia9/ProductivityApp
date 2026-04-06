import Button from '@mui/material/Button';
import { useState } from 'react';

export default function CheckToggle({ setCheckedTodos, setListTodos, checkedTodos }: any) {
  const [applychecked, setApplyChecked] = useState(false);
  return (<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <Button variant="outlined" sx={{ marginTop: 2, marginLeft: 5 }} onClick={() => {
      if (!applychecked) {
        setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => true))
      }

      else {
        setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.map(() => false))
      };
      setApplyChecked((prevApplyChecked: boolean) => !prevApplyChecked);

    }}>{applychecked ? 'uncheck all' : 'check all'}</Button>
    <Button variant="outlined" sx={{ marginTop: 2, marginLeft: 3 }} onClick={() => setListTodos((prevListTodos: string[]) => {
      const filteredTodos = prevListTodos.filter((_, i) => !checkedTodos[i]);
      setCheckedTodos(checkedTodos.filter((value:boolean) => !value));
      return filteredTodos;
    })}> delete the Selected Todos</Button></div>)
}