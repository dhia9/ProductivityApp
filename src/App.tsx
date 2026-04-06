import { HashRouter   as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import { useState } from 'react';
function App() {
  const [profile, setProfile] = useState<Record<string, any> | null>(null);
  const [user, setUser] = useState<string>("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home profile={profile} setProfile={setProfile} user={user} setUser={setUser} />} />
        <Route path="/profile" element={<ProfilePage profile={profile} />} />
      </Routes>
    </Router>

    

  )
}

export default App