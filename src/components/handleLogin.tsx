import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function HandleLogin({ setLoading, user, setUser }: any) {
    const [open, setOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [profile, setProfile] = useState<any>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
        setLoading(true);
        await fetch("https://api.github.com/users/" + user)
            .then(async res => {
                if (res.ok) {
                    const data = await res.json();
                    setProfile(data);
                    console.log(data);

                } else {
                    console.log("user not found");
                    setUser("User not found . Please type a correct one .");

                }
                handleClose();
            }).catch(err => {
                console.log(err);
                console.log("user not found");
                handleClose();

            })
        setLoading(false);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <React.Fragment>

                <Button color="inherit" onClick={!profile ? handleClickOpen : () => setProfile(null)}>
                    {!profile ? "Login" : "Logout"}
                </Button>
                {profile &&
                    <Button color="inherit" href={profile && profile.html_url} target="_blank">
                        {profile.name}
                    </Button>
                }
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={profile && profile.avatar_url} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>

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
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit" form="subscription-form">
                            find account
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment></>
    )
}