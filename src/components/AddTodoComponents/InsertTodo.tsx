import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../componentStyle/AddTodo.css';
export default function InsertTodo({ todo, setTodo, setSameTodos, listTodos, setListTodos, setCheckedTodos }: { todo: string, setTodo: any, setSameTodos: any, listTodos: string[], setListTodos: any, setCheckedTodos: any }) {
  return (<Box sx={{ display: 'flex', width: 500, maxWidth: '100%', margin: 'auto', marginTop: 2, gap: 1 }}>
    <TextField fullWidth label="add a Todo" id="fullWidth" value={todo} onChange={(e) => {
      setTodo(e.target.value)
      setSameTodos(false)
    }} />
    <button onClick={() => {
      if (todo) {
        if (listTodos.includes(todo)) {
          setSameTodos(true);
        }
        else {
          setListTodos((prevListTodos: Array<string>) => [...prevListTodos, todo]);
          setTodo('');
          setCheckedTodos((prevCheckedTodos: boolean[]) => [...prevCheckedTodos, false]);
        }

      }
    }} className='' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg></button>

  </Box>)
}