import "../PageStyle/ProfilePageStyle.css";
import PopupErrorMassage from './HandleLoadErrorNavbarComponents/PopupErrorMassage';
import NavbarLoding from './HandleLoadErrorNavbarComponents/NavbarLoding';
export default function HandleLoadErrorNavbar({ profile, setProfile, user, setUser }: { profile: Record<string, any> | null, setProfile: (value: Record<string, any> | null) => void, user: string, setUser: (value: string) => void }) {
  return (<>
    <NavbarLoding profile={profile} setProfile={setProfile} user={user} setUser={setUser} />
    {user === "User not found . Please type a correct one ." && <PopupErrorMassage user={user} />}
  </>
  );
}
