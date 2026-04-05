
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchTodos() {
  return (<>
    <Button variant="outlined" sx={{display: 'block',margin:'auto',marginTop:2}}>apply the research</Button>
     <Box sx={{ width: 500, maxWidth: '100%',margin:'auto',marginTop:2 }}>
      <TextField fullWidth label="search in the Todos" id="fullWidth" />
    </Box></>)}