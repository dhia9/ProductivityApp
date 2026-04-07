import Box from '@mui/material/Box';
import Todo from './Todo';
export default function DisplayTodos({ checkedTodos, setCheckedTodos, listTodos,sameTodos,deleteTodo }: { checkedTodos: boolean[], setCheckedTodos: any, listTodos: string[], setListTodos: any,sameTodos:boolean,deleteTodo:any }) {
    return (
        <Box sx={{
      width: '450px',
      maxHeight: 300,
      overflowY: 'auto',
      margin: '0 auto',
      marginTop: 2,
      marginRight: 2
    }}>
      {sameTodos && <h3 style={{ color: 'red', marginLeft: "26%" }}>This todo already exists</h3>}
      <ul >
        {listTodos.map((item: string, index: number) => {
          return (<Todo checkedTodos={checkedTodos} setCheckedTodos={setCheckedTodos} item={item} index={index} deleteTodo={deleteTodo}
          />)
        })}</ul></Box>)}