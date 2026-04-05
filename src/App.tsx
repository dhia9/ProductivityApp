// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import {useState } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import DescribeTodos from './components/DescribeTodos';
import SearchTodos from './components/SearchTodos';

import AddTodo from './components/AddTodo';
// function filterTodos() {
//   return (<>
//   <Button variant="outlined">Outlined</Button></>)
// }
function App() {
  const [remainingEnabled, setRemainingEnabled] = useState(false);
  return (
    <>
    <ButtonAppBar/>
    <DescribeTodos remainingEnabled={remainingEnabled} setRemainingEnabled={setRemainingEnabled} />
    <SearchTodos/>
    <AddTodo/>
     </>
     
    
   
  )
}

export default App