import Button from '@mui/material/Button';

export default function DeleteChecked({ checkedTodos, setCheckedTodos, buttonSx, setListTodos }: { checkedTodos: boolean[], setCheckedTodos: any, buttonSx: Record<string, any>, setListTodos: any }) {
    return (<>
        <Button variant="outlined" sx={{ ...buttonSx, }} onClick={() => setListTodos((prevListTodos: string[]) => {
            const filteredTodos = prevListTodos.filter((_, i) => !checkedTodos[i]);
            setCheckedTodos(checkedTodos.filter((value: boolean) => !value));
            return filteredTodos;
        })}> delete the Selected Todos</Button></>)
}