import { HashRouter   as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>



  )
}

export default App