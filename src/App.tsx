// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import {useState } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import DescribeTodos from './components/DescribeTodos';
import CheckToggle from './components/checkToggle';
import SearchAndFilter from './components/searchAndFilter';
import AddTodo from './components/AddTodo';
// function filterTodos() {
//   return (<>
//   <Button variant="outlined">Outlined</Button></>)
// }
function App() {
  const [remainingEnabled, setRemainingEnabled] = useState(false);
  const [checkedTodos, setCheckedTodos] = useState<boolean[]>([]);
  const [listTodos, setListTodos] = useState<string[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<string[]>([]);
  const [search, setSearch] = useState("")
  const handleFilter = (search:string) => {
    if (search) {
      setFilteredTodos(listTodos.filter((todo:string) => todo.toLowerCase().includes(search.toLowerCase())));
    } else {
      setFilteredTodos([]);
    }
  }
  return (
    <>
    <ButtonAppBar/>
    <DescribeTodos remainingEnabled={remainingEnabled} setRemainingEnabled={setRemainingEnabled} checkedTodos={checkedTodos}  />
    <CheckToggle setCheckedTodos={setCheckedTodos} />
    <SearchAndFilter  handleFilter={handleFilter} search={search} setSearch={setSearch} filteredTodos={filteredTodos} />
    <AddTodo checkedTodos={checkedTodos} setCheckedTodos={setCheckedTodos} listTodos={search ? filteredTodos : listTodos} setListTodos={setListTodos} />
     </>
     
    
   
  )
}

export default App