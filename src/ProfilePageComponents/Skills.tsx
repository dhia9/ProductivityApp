import LoadingDisplay from '../components/HandleLoadErrorNavbarComponents/LoadingDisplay';
export default function Skills({ skills,loading }: { skills: string[], loading: boolean }) {
    return(<>
        <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Skills</h2>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {loading ? <LoadingDisplay /> : (skills.length > 0
                                        ? skills.map(skill => (
                                            <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                                        ))
                                        : <p className="text-gray-600 dark:text-gray-300">No skills found.</p>)}
                                    
                                </div>
    </>
    )
}
                                    
