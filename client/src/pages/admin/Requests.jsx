import React, { useState, useEffect } from "react";
import { UserCard } from "../../components/admin/UserCard";
import api from "../../api/axios";
import toast from "react-hot-toast";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const userID = localStorage.getItem('userID');

  // Fetch pending requests when component mounts
  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    
    
    try {
      const {data} = await api.get(`/api/request/pending/${userID}`);
      setRequests(data.requests || []);
      //console.log()

    } 
    
    
    catch (error) {
      console.error("Failed to fetch requests", error);
      toast.error("Failed to fetch requests");
    }
    setLoading(false);
  };

  // Handle accept request
  
  const handleAccept = async (requestId) => {
    try {
      const {data} = await api.put(`/api/request/${requestId}/accept`);
      
      if (data.success) {
        // Remove from requests list after accepting
        setRequests(requests.filter(request => request._id !== requestId));
        toast.success("Request accepted!");
      }
    } catch (error) {
      console.error("Failed to accept request", error);
      toast.error("Failed to accept request");
    }
  };

  // Handle reject request
  const handleReject = async (requestId) => {
    try {
      const {data} = await api.delete(`/api/request/${requestId}/decline`);
      
      if (data.success) {
        // Remove from requests list after rejecting
        setRequests(requests.filter(request => request._id !== requestId));
        toast.success("Request rejected!");
      }
    } catch (error) {
      console.error("Failed to reject request", error);
      toast.error("Failed to reject request");
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
        ) : (
          requests.length > 0 ? (
            requests.map((request) => (
              <div key={request._id} className="relative">
                <UserCard user={request.requestFrom} />

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleAccept(request._id)}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request._id)}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No pending requests.</p>
          )
        )}
      </div>

    </div>
  );
};

export default Requests;