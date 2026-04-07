import { useState } from 'react';
import CheckTodos from './CheckToggleComponents/CheckTodos';
import DeleteChecked from './CheckToggleComponents/DeleteChecked';
export default function CheckToggle({ setCheckedTodos, setListTodos, checkedTodos, buttonSx }: { setCheckedTodos: any, setListTodos: any, checkedTodos: boolean[], buttonSx: Record<string, any> }) {
  const [applychecked, setApplyChecked] = useState(false);
  return (<div>
    <CheckTodos setCheckedTodos={setCheckedTodos}  applychecked={applychecked} setApplyChecked={setApplyChecked} buttonSx={buttonSx} />
    <DeleteChecked checkedTodos={checkedTodos} setCheckedTodos={setCheckedTodos} buttonSx={buttonSx} setListTodos={setListTodos} />
  </div>)
}