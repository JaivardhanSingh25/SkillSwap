import React, { useState, useEffect } from "react";
import { UserCard } from "../../components/admin/UserCard";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch pending requests when component mounts
  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/requests");
      const data = await res.json();
      setRequests(data.requests || []);
    } catch (error) {
      console.error("Failed to fetch requests", error);
    }
    setLoading(false);
  };

  // Handle accept request
  const handleAccept = async (userId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/requests/accept/${userId}`, {
        method: "POST",
      });
      
      if (res.ok) {
        // Remove from requests list after accepting
        setRequests(requests.filter(user => user._id !== userId));
        alert("Request accepted!");
      }
    } catch (error) {
      console.error("Failed to accept request", error);
    }
  };

  // Handle reject request
  const handleReject = async (userId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/requests/reject/${userId}`, {
        method: "POST",
      });
      
      if (res.ok) {
        // Remove from requests list after rejecting
        setRequests(requests.filter(user => user._id !== userId));
        alert("Request rejected!");
      }
    } catch (error) {
      console.error("Failed to reject request", error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md border w-full">
        <h2 className="text-2xl font-bold">Connection Requests</h2>
        <p className="text-gray-600 mt-2">People who want to connect with you</p>
      </div>

      {/* Requests List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-gray-600">Loading requests...</p>
        ) : requests.length > 0 ? (
          requests.map((user) => (
            <div key={user._id} className="relative">
              <UserCard user={user} />
              
              {/* Accept/Reject Buttons Overlay */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleAccept(user._id)}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(user._id)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No pending requests.</p>
        )}
      </div>

    </div>
  );
};

export default Requests;