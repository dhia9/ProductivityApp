import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
export default function DescribeTodos({ setRemainingEnabled, remainingEnabled, checkedTodos, buttonSx }: { setRemainingEnabled: any, remainingEnabled: boolean, checkedTodos: boolean[], buttonSx: Record<string, any> }) {
  const countChecked = checkedTodos.reduce((acc: number, value: boolean) => acc + (value ? 1 : 0), 0);
    return (<>
      <Button variant="contained" disableElevation sx={{...buttonSx,}} onClick={() => setRemainingEnabled((prevRemainingEnabled: boolean) => !prevRemainingEnabled)}>
        Show the todoList description
      </Button>
      {remainingEnabled &&<h2  style={{  width: '100%' ,fontSize: '1 rem',marginLeft:"50%"}}>You have {checkedTodos.length} todos in total <br /> <DoneIcon color="success" /> {countChecked} completed      <WarningOutlinedIcon style={{ color: "red" }} /> {checkedTodos.length - countChecked} remaining </h2>}</>
  );
}