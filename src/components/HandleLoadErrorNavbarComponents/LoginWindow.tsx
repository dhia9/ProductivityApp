import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function LoginWindow({ user, setUser, open, handleClose, handleSubmit }: { user: string, setUser: (value: string) => void, open: boolean, handleClose: () => void, handleSubmit: any }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Log into your github account</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} id="subscription-form">
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Github username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    setUser("");
                    handleClose()
                }}>Cancel</Button>
                <Button type="submit" form="subscription-form">
                    find account
                </Button>
            </DialogActions>
        </Dialog>)
}