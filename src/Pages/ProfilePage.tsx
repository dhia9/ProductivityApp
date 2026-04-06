import "../PageStyle/ProfilePageStyle.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
    const location = useLocation();
    const { profile } = location.state || {};
    const [skills, setSkills] = useState<string[]>([]); // State for fetched skills

    useEffect(() => {
        if (!profile) return;

        const fetchLanguages = async () => {
            try {
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
        };

        fetchLanguages();
    }, [profile]); // Only run when profile changes

    return (<>
        {profile ? <div className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 text-center mb-8 md:mb-0">
                        <img src={profile.avatar_url} alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" />
                        <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{profile.name}</h1>
                        <p className="text-gray-600 dark:text-gray-300">lives in {profile.location}</p>
                        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                            <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="text-white no-underline">
                                Visit GitHub Profile
                            </a>
                        </button>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{profile.bio}</p>

                        <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {skills.length > 0
                                ? skills.map(skill => (
                                    <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                                ))
                                : <p className="text-gray-600 dark:text-gray-300">No skills found.</p>
                            }
                        </div>
                        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300" style={{ display: "flex", margin: "auto", marginTop: "5px" }}>
                            <a href="/ProductivityApp/" className="text-white no-underline">
                                Back to the TodoList
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div> : <div className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex flex-col items-center justify-center p-4 gap-4">
    <p className="text-white text-lg">No profile found</p>
    
    <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
        <a href="/ProductivityApp/" className="text-white no-underline">
            Back to the TodoList
        </a>
    </button>
    
</div>}
    </>
    );
}