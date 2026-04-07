import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../../componentStyle/AddTodo.css';
export default function Todo({ checkedTodos, setCheckedTodos, item, index, deleteTodo }: { checkedTodos: boolean[], setCheckedTodos: any, item: string, index: number, deleteTodo: any }) {
    return (
        <li key={index} >
            <FormControlLabel control={<Checkbox checked={checkedTodos[index]} onClick={() => {
                setCheckedTodos((prevCheckedTodos: boolean[]) => {
                    const newCheckedTodos = [...prevCheckedTodos];
                    newCheckedTodos[index] = !newCheckedTodos[index];
                    return newCheckedTodos;
                })
            }} />} label={item} key={index} />
            <button className="deleteButton" onClick={() => deleteTodo(index)}>
                <DeleteIcon />
            </button>
        </li>

    )
}