import Button from '@mui/material/Button';
export default function DescribeTodos({setRemainingEnabled,remainingEnabled}:any) {
  return (<>
    <Button variant="contained" disableElevation sx={{ margin: 'auto', display: 'block', marginTop: 2 }} onClick={()=>setRemainingEnabled((prevRemainingEnabled:boolean)=>!prevRemainingEnabled)}>
      Show remaining
    </Button>
    {remainingEnabled &&<h1 style={{textAlign:'center'}}>You have 0 todos in total <br/> 0 completed - 0 remaining</h1>}</>
    
  );
}