import React, { useState } from "react";
import UserCard from "../../components/admin/UserCard"; // <-- card component

const Search = () => {
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/users/search?skill=${skill}&location=${location}`
      );

      const data = await res.json();
      setResults(data.users || []);  // depends on your backend JSON
    } catch (error) {
      console.error("Search failed", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full p-8">

      {/* Search Form */}
      <div className="bg-white p-6 rounded-xl shadow-md border w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Search People</h2>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search by skill..."
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="border px-4 py-3 rounded-lg w-full"
          />

          <input
            type="text"
            placeholder="Search by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border px-4 py-3 rounded-lg w-full"
          />

          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition w-full md:w-auto"
          >
            Search
          </button>

        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-gray-600">Searching...</p>
        ) : results.length > 0 ? (
          results.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <p className="text-gray-600">No results yet.</p>
        )}
      </div>

    </div>
  );
};

export default Search;