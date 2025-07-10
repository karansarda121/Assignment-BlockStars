import { Link } from "react-router-dom";

function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-200 p-6 text-center">
            <div className="bg-white p-6 rounded shadow-md max-w-xl w-full">
                <h2 className="text-2xl font-semibold mb-4">About Page</h2>
                <p className="text-gray-700 mb-6">
                    This page is part of a practical React assignment that demonstrates routing,
                    dropdown interaction, conditional rendering, and layout logic. It's styled with Tailwind CSS for a clean and responsive UI.
                </p>
                <div className="space-x-4">
                    <Link
                        to="/head-tail"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Go to Head & Tail
                    </Link>
                    <Link
                        to="/"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
