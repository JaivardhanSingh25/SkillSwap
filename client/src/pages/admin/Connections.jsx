import React, { useState, useEffect } from "react";
import { UserCardDetailed } from "../../components/admin/DetailedCard";
import api from "../../api/axios";

const Connections = () => {
  const [cleaned, setCleaned] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch connections when component mounts
  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    setLoading(true);
    try {
      const userID = localStorage.getItem('userID')

      const {data} = await api.get(`/api/request/accepted/${userID}`)
      console.log(data)
      
      const cleaned = data.connections;
      
      setCleaned(cleaned || []);
      
    
    } 
    
    catch (error) {
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
        ) : cleaned.length > 0 ? (
          cleaned.map((user) => (
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