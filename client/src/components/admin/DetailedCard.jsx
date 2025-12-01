import React from "react";


export const UserCardDetailed = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      
      {/* Header with Avatar */}
      <div className="bg-linear-to-r from-gray-50 to-gray-100 p-6 flex items-center gap-4">
        {/* Avatar circle with initials - color generated from name */}
        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          RV
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-800 truncate">{user.name}</h3>
          <p className="text-gray-600 text-sm">{user.age} years old</p>
        </div>      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        
        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-sm">📍 {user.location}</span>
        </div>

        {/* Skills Known */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Skills Offered</p>
          <div className="flex flex-wrap gap-2">
            {/* Map through user.skillKnown array and display first 4 */}
            {user.skillKnown.map((skill) => <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              {skill}
            </span>)}
            {/* If more than 4 skills, show "+X more" badge */}
          </div>
        </div>

        {/* Skills Wanted */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Looking to Learn</p>
          <div className="flex flex-wrap gap-2">
            {/* Map through user.skillWanted array and display first 4 */}
            {user.skillWanted.map((skill) => <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              {skill}
            </span>)}
            {/* If more than 4 skills, show "+X more" badge */}
          </div>
        </div>

        {/* Contact Info - Only in Detailed Card */}
        <div className="space-y-2 pt-4 border-t">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-sm">📧</span>
            <a href={`mailto:${user.email}`} className="text-sm hover:text-blue-600 truncate">
              {user.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-sm">📱</span>
            <a href={`tel:${user.phone}`} className="text-sm hover:text-blue-600">
              {user.phone}
            </a>
          </div>
        </div>

        {/* Action Button - Add your onClick handler here */}
        <button
          className="w-full mt-4 px-4 py-2 bg-black text-white rounded-lg hover:opacity-80 transition font-medium"
        >
          Message
        </button>
      </div>
    </div>
  );
};