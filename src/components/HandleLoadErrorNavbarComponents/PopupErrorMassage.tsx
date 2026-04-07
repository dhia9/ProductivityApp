import Typography from '@mui/material/Typography';
import "../../PageStyle/ProfilePageStyle.css";
export default function PopupErrorMassage({ user }: { user: string }) {
    return (<Typography variant="h6" color="error" align="center" sx={{ mt: 2, backgroundColor: 'red', maxWidth: '50%', marginLeft: '25%', border: '1px solid black', borderRadius: '0.375rem', color: 'black', padding: 0 }}>
      <div className="p-2 mb-1 text-sm text-fg-danger-strong rounded-base bg-danger-soft" role="alert">
      <span className="font-medium"> alert</span> {user}
    </div>
    </Typography>)}