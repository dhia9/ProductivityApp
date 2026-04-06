import Button from '@mui/material/Button';
import { useState } from 'react';

export default function CheckToggle({ setCheckedTodos, setListTodos, checkedTodos, buttonSx }: { setCheckedTodos: any, setListTodos: any, checkedTodos: boolean[], buttonSx: Record<string, any> }) {
  const [applychecked, setApplyChecked] = useState(false);
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
}