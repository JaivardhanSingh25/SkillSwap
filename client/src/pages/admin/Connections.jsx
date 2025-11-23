import React, { useState, useEffect } from "react";
import { UserCardDetailed } from "../../components/admin/DetailedCard";

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch connections when component mounts
  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/connections");
      const data = await res.json();
      setConnections(data.connections || []);
    } catch (error) {
      console.error("Failed to fetch connections", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md border w-full">
        <h2 className="text-2xl font-bold">My Connections</h2>
        <p className="text-gray-600 mt-2">People you're connected with</p>
      </div>

      {/* Connections List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-gray-600">Loading connections...</p>
        ) : connections.length > 0 ? (
          connections.map((user) => (
            <UserCardDetailed key={user._id} user={user} />
          ))
        ) : (
          <p className="text-gray-600">No connections yet.</p>
        )}
      </div>

    </div>
  );
};

export default Connections;