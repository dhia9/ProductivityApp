import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HandleLogin from './handleLogin';
export default function ButtonAppBar({ profile, setProfile, user, setUser ,setLoading}: { profile: Record<string, any> | null, setProfile: (value: Record<string, any> | null) => void, user: string, setUser: (value: string) => void ,setLoading: (value: boolean) => void}) {
  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#130175f1' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ margin: 'auto' }}>
            Todo List
          </Typography>
          <HandleLogin setLoading={setLoading} user={user} setUser={setUser} profile={profile} setProfile={setProfile} />
        </Toolbar>
      </AppBar>
    </Box>
  </>
  );
}
