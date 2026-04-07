import { useState } from 'react';
import '../componentStyle/AddTodo.css';
import DisplayTodos from './AddTodoComponents/DisplayTodos';
import InsertTodo from './AddTodoComponents/InsertTodo';
export default function AddTodo({ checkedTodos, setCheckedTodos, listTodos, setListTodos }: { checkedTodos: boolean[], setCheckedTodos: any, listTodos: string[], setListTodos: any }) {
  const [todo, setTodo] = useState('');
  const [sameTodos, setSameTodos] = useState(false);
  const deleteTodo = (index: number) => {
    setListTodos((prevListTodos: Array<string>) => prevListTodos.filter((_, i) => i !== index));
    setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.filter((_, i) => i !== index));
  }
  return (<>
    <InsertTodo todo={todo} setTodo={setTodo} setSameTodos={setSameTodos} listTodos={listTodos} setListTodos={setListTodos} setCheckedTodos={setCheckedTodos} />
    <DisplayTodos checkedTodos={checkedTodos} setCheckedTodos={setCheckedTodos} listTodos={listTodos} setListTodos={setListTodos} sameTodos={sameTodos} deleteTodo={deleteTodo} />
  </>);
}