import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/ProductivityApp/" element={<Home />} />
        <Route path="/ProductivityApp/profile" element={<ProfilePage />} />
      </Routes>
    </Router>



  )
}

export default App