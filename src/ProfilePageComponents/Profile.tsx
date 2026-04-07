export default function Profile({ profile }: { profile: Record<string, any>}) {
    return ( <div className="md:w-1/3 text-center mb-8 md:mb-0">
                        <img src={profile.avatar_url} alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" />
                        <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{profile.name}</h1>
                        <p className="text-gray-600 dark:text-gray-300">lives in {profile.location}</p>
                        <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                            <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="text-white no-underline">
                                Visit GitHub Profile
                            </a>
                        </button>
                    </div>)} 