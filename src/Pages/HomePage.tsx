import { useState } from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import DescribeTodos from '../components/DescribeTodos';
import CheckToggle from '../components/checkToggle';
import SearchAndFilter from '../components/searchAndFilter';
import Box from '@mui/material/Box';
import AddTodo from '../components/AddTodo';
import Paper from '@mui/material/Paper';
import "../PageStyle/ProfilePageStyle.css";
function Home() {
  const [remainingEnabled, setRemainingEnabled] = useState(false);
  const [checkedTodos, setCheckedTodos] = useState<boolean[]>([]);
  const [listTodos, setListTodos] = useState<string[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<string[]>([]);
  const [search, setSearch] = useState("")
  const handleFilter = (search: string) => {
    if (search) {
      setFilteredTodos(listTodos.filter((todo: string) => todo.toLowerCase().includes(search.toLowerCase())));
    } else {
      setFilteredTodos([]);
    }
  }

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen">
      <ButtonAppBar />
      <Box
  sx={{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2,
  }}
>
  <Paper 
  className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      maxWidth: 500,
      width: '100%',
      p: 2,
      border: '2px solid black',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.51)',
      
    }}
  >
    <SearchAndFilter handleFilter={handleFilter} search={search} setSearch={setSearch} filteredTodos={filteredTodos} />
      <AddTodo checkedTodos={checkedTodos} setCheckedTodos={setCheckedTodos} listTodos={search ? filteredTodos : listTodos} setListTodos={setListTodos} />
        <CheckToggle  buttonSx={{ minWidth: 120, fontSize: '0.6rem', py: 0.6 }} setCheckedTodos={setCheckedTodos} setListTodos={setListTodos} checkedTodos={checkedTodos} />
        <DescribeTodos  buttonSx={{ minWidth: 120, fontSize: '0.6rem', py: 0.7 }} remainingEnabled={remainingEnabled} setRemainingEnabled={setRemainingEnabled} checkedTodos={checkedTodos} />
  </Paper>
</Box>
    </div>
  )
}

export default Home