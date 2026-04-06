import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function SearchAndFilter({ handleFilter, search, setSearch, filteredTodos }: {  handleFilter: (value: string) => void; search: string; setSearch: (value: string) => void; filteredTodos: string[] }) {

  return (
    <Box sx={{ width: 500, maxWidth: '100%', margin: 'auto', marginTop: 2 }}>
      <TextField fullWidth label="Search Todos" id="fullWidth" value={search} onChange={e => {
        const value = e.target.value;
        setSearch(value);
        handleFilter(value);
      }} />
      {search && (filteredTodos.length===0 ? (
        <h3 style={{marginTop: 5, marginLeft: "26%" }}>No items found</h3>
      ) : (
        <h3 style={{marginTop: 5, marginLeft: "26%" }}>{filteredTodos.length} Todos found including "{search}"</h3>)
      )}

    </Box>)
}
