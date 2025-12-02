export const UserCard = ({ user }) => {

  if (!user) return null;   // <<< PREVENT CRASHES




  const recieve = user?._id;


  const send = localStorage.getItem("userID");

  const requestHandler = async () => {
    
    const { data } = await api.post("/api/request", { send, recieve });
  }

  return (
    <div className="bg-white rounded-xl shadow-md border hover:shadow-lg">
      <div className="bg-linear-to-r from-gray-50 to-gray-100 p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white">
          PS
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold">{user?.name}</h3>
          <p className="text-gray-600 text-sm">{user?.age} years old</p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-gray-600">
          <span>📍 {user?.location}</span>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Skills Offered</p>
          <div className="flex flex-wrap gap-2">
            {(user?.skillKnown || []).map((skill) => (
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Looking to Learn</p>
          <div className="flex flex-wrap gap-2">
            {(user?.skillWanted || []).map((skill) => (
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button onClick={requestHandler}
          className="w-full mt-4 px-4 py-2 bg-black text-white rounded-lg">
          Send Request
        </button>
      </div>
    </div>
  );
};