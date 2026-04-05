
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function SearchAndFilter({ handleFilter ,search, setSearch}: any) {

  return (
    <Box sx={{ width: 500, maxWidth: '100%', margin: 'auto', marginTop: 2 }}>
      <TextField fullWidth label="Search Todos" id="fullWidth" value={search} onChange={e => {
        const value = e.target.value;
        setSearch(value);
        handleFilter(value);
      }} />

    </Box>)
}


// {filteredTodos&&
//       <ul>
//         {filteredTodos.map((item:string, index:number) => <li key={index}>{item}</li>)}
//       </ul>}