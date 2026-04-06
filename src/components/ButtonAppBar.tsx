import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinearIndeterminate from './LoadingHandler';
import HandleLogin from './handleLogin';

export default function ButtonAppBar() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ margin: 'auto' }}>
            Todo List
          </Typography>
          <HandleLogin setLoading={setLoading} user={user} setUser={setUser} />
        </Toolbar>
      </AppBar>
    </Box>
    {loading && <LinearIndeterminate />}
    {user === "User not found . Please type a correct one ." && <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
      {user}
    </Typography>}


  </>
  );
}