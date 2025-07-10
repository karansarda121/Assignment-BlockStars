import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center p-6">
            <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
            <div className="space-x-4">
                <Link
                    to="/about"
                    className="bg-white px-4 py-2 rounded shadow hover:bg-blue-200 transition"
                >
                    Go to About Page
                </Link>
                <Link
                    to="/head-tail"
                    className="bg-white px-4 py-2 rounded shadow hover:bg-green-200 transition"
                >
                    Go to Head & Tail
                </Link>
            </div>
        </div>
    );
}

export default Home;
