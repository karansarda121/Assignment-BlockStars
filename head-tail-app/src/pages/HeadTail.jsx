import { useState } from "react";
import { Link } from "react-router-dom";

function HeadTail() {
    const [selected, setSelected] = useState("");
    const [columns, setColumns] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!selected) {
            setError("Please select value from dropdown");
            return;
        }

        setError("");
        setSelected(""); // reset dropdown

        const lastColumn = columns[columns.length - 1];

        if (!lastColumn || lastColumn[0] !== selected) {
            setColumns([...columns, [selected]]);
        } else {
            const newColumns = [...columns];
            newColumns[newColumns.length - 1].push(selected);
            setColumns(newColumns);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-4 sm:p-6">
            {/* 🔗 Top Right Navigation */}
            <div className="flex justify-end mb-4 space-x-4">
                <Link
                    to="/"
                    className="text-sm sm:text-base bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="text-sm sm:text-base bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                    About
                </Link>
            </div>

            <div className="bg-white p-6 rounded shadow-md max-w-2xl w-full mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Head & Tail</h2>

                {/* Form */}
                <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
                    <select
                        className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                    >
                        <option value="">Select Value</option>
                        <option value="H">H</option>
                        <option value="T">T</option>
                    </select>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>

                {/* Validation Message */}
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Pattern Grid */}
                <div className="flex justify-center flex-wrap gap-6 mt-6 overflow-x-auto">
                    {columns.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col items-center">
                            {col.map((char, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className="bg-gray-200 text-lg font-semibold text-center border w-10 h-10 flex items-center justify-center mb-1 rounded shadow"
                                >
                                    {char}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeadTail;
