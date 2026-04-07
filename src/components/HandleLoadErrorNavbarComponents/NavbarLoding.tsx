import { useState } from 'react';
import LinearIndeterminate from './LoadingDisplay';
import ButtonAppBar from './ButtonAppBar';
export default function NavbarLoding({ profile, setProfile, user, setUser }: { profile: Record<string, any> | null, setProfile: (value: Record<string, any> | null) => void, user: string, setUser: (value: string) => void }) {
  const [loading, setLoading] = useState(false);
  return (<>
    <ButtonAppBar profile={profile} setProfile={setProfile} user={user} setUser={setUser} setLoading={setLoading} />
    {loading && <LinearIndeterminate />}
  </>
  );
}
