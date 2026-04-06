import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../componentStyle/AddTodo.css';

export default function AddTodo({ checkedTodos, setCheckedTodos, listTodos, setListTodos }: { checkedTodos: boolean[], setCheckedTodos: any, listTodos: string[], setListTodos: any }) {
  const [todo, setTodo] = useState('');
  const deleteTodo = (index: number) => {
    setListTodos((prevListTodos: Array<string>) => prevListTodos.filter((_, i) => i !== index));
    setCheckedTodos((prevCheckedTodos: boolean[]) => prevCheckedTodos.filter((_, i) => i !== index));
  }
  return (<>
    <Box sx={{ display: 'flex', width: 500, maxWidth: '100%', margin: 'auto', marginTop: 2, gap: 1 }}>
      <TextField fullWidth label="add a Todo" id="fullWidth" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => {
        if (todo) {
          setListTodos((prevListTodos: Array<string>) => [...prevListTodos, todo]);
          setTodo('');
          setCheckedTodos((prevCheckedTodos: boolean[]) => [...prevCheckedTodos, false]);
        }
      }} className='BoxButton'><AddIcon /></button>

    </Box>
    <Box  sx={{
    width: '450px',
    maxHeight: 300,
    overflowY: 'auto',
    margin: '0 auto',
    marginTop: 2,
    marginRight:2
  }}>
    <ul >
      {listTodos.map((item: string, index: number) => {
        return (<li key={index} >
          <FormControlLabel control={<Checkbox checked={checkedTodos[index]} onClick={() => {
            setCheckedTodos((prevCheckedTodos: boolean[]) => {
              const newCheckedTodos = [...prevCheckedTodos];
              newCheckedTodos[index] = !newCheckedTodos[index];
              return newCheckedTodos;
            })
          }} />} label={item} key={index} />
          <button onClick={() => deleteTodo(index)}><DeleteIcon /></button>
        </li>

        )
      })}</ul></Box>
  </>);
}