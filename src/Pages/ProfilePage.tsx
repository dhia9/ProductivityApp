import "../PageStyle/ProfilePageStyle.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotFoundProfile from '../ProfilePageComponents/NotFoundProfile';
import Skills from '../ProfilePageComponents/Skills';
import ProfileBio from '../ProfilePageComponents/ProfileBio';
import Profile from '../ProfilePageComponents/Profile';
export default function ProfilePage({ profile }: { profile: Record<string, any> | null }) {
    const [skills, setSkills] = useState<string[]>([]); // State for fetched skills
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (profile)    {
            const fetchLanguages = async () => {
                try {
                    setLoading(true);
                    const res = await fetch(profile.repos_url);
                    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
                    const repositories = await res.json();
                    const foundLanguages = new Set<string>();

                    for (const repo of repositories) {
                        if (repo.languages_url) {
                            const response = await fetch(repo.languages_url);
                            if (!response.ok) continue;
                            const repoLanguages = await response.json();
                            Object.keys(repoLanguages).forEach(lang => foundLanguages.add(lang));
                        }
                    }

                    setSkills(Array.from(foundLanguages));
                } catch (error) {
                    console.error('Error fetching repos:', error);
                }
                setLoading(false);
            };

            fetchLanguages();
        }
    }, [profile]); // Only run when profile changes

    return (<>
        {profile ? <div className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
                <div className="flex flex-col md:flex-row">
                    <Profile profile={profile} />
                    <div className="md:w-2/3 md:pl-8">
                        <ProfileBio profile={profile} />
                        <Skills skills={skills} loading={loading} />
                        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300" style={{ display: "flex", margin: "auto", marginTop: "5px" }}>
                            <Link to="/" className="text-white no-underline">
                                Back to the TodoList
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div> : <NotFoundProfile />}

    </>
    );
}