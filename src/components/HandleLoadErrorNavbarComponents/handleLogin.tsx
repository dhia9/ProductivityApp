import Button from '@mui/material/Button';
import LoginWindow from './LoginWindow';
import React from 'react';
import IconProfileWindow from './IconProfileWindow';
export default function HandleLogin({ setLoading, user, setUser, profile, setProfile }: { setLoading: (value: boolean) => void, user: string, setUser: (value: string) => void, profile: Record<string, any> | null, setProfile: (value: Record<string, any> | null) => void }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        await fetch("https://api.github.com/users/" + user)
            .then(async res => {
                if (res.ok) {
                    const data = await res.json();
                    setProfile(data);

                } else {
                    setUser("User not found . Please type a correct one .");

                }
                handleClose();
            }).catch(_ => {
                setUser("User not found . Please type a correct one .");
                handleClose();

            })
        setLoading(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <React.Fragment>
                <Button color="inherit" onClick={!profile ? () => {
                    setUser("");
                    handleClickOpen()
                } : () => {
                    setProfile(null)
                    setUser("");
                }}>
                    {!profile ? "Login" : "Logout"}
                </Button>

                <LoginWindow user={user} setUser={setUser} open={open} handleClose={handleClose} handleSubmit={handleSubmit} />


                {profile && <>
                    <Button color="inherit" href={profile && profile.html_url} target="_blank" style={{ marginRight: 10 }}>
                        {profile.name}
                    </Button>
                    <IconProfileWindow profile={profile} />
                </>}
            </React.Fragment></>
    )
}