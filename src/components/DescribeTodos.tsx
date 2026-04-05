import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
export default function DescribeTodos({ setRemainingEnabled, remainingEnabled, checkedTodos }: any) {

  const countChecked = checkedTodos.reduce((acc: number, value: boolean) => acc + (value ? 1 : 0), 0);
  return (<>
    <Button variant="contained" disableElevation sx={{ margin: 'auto', display: 'block', marginTop: 2 }} onClick={() => setRemainingEnabled((prevRemainingEnabled: boolean) => !prevRemainingEnabled)}>
      Show remaining
    </Button>
    {remainingEnabled && <h1 style={{ textAlign: 'center' }}>You have {checkedTodos.length} todos in total <br /> {countChecked} completed <DoneIcon color="success"/> - {checkedTodos.length - countChecked} remaining <WarningOutlinedIcon style={{color:"red"}}/></h1>}</>

  );
}