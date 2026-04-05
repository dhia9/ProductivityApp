
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
// import InputAdornment from '@mui/material/InputAdornment';
export default function AddTodo() {
  return (
    <Box sx={{ display: 'flex', width: 500, maxWidth: '100%',margin:'auto',marginTop:2 }}>
      <TextField  fullWidth label="add a Todo" id="fullWidth"/>
      <AddIcon sx={{ margin:'auto' , marginLeft: 2 }} onClick={() => console.log('Add clicked')}/>
    </Box>);}