import "../PageStyle/ProfilePageStyle.css";
import { Link } from 'react-router-dom';
export default function NotFoundProfile() {
    return (<div className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex flex-col items-center justify-center p-4 gap-4">
            <p className="text-white text-lg">No profile found</p>

            <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                <Link to="/" className="text-white no-underline">
                    Back to the TodoList
                </Link>
            </button></div>)
}