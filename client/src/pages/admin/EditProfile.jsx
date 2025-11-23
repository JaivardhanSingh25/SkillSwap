import React, { useState, useEffect } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    location: "",
    skillKnown: [],
    skillWanted: []
  });

  const [newSkillKnown, setNewSkillKnown] = useState("");
  const [newSkillWanted, setNewSkillWanted] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch current user data on mount
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/profile");
      const data = await res.json();
      
      setFormData({
        name: data.name || "",
        age: data.age || "",
        email: data.email || "",
        phone: data.phone || "",
        location: data.location || "",
        skillKnown: data.skillKnown || [],
        skillWanted: data.skillWanted || []
      });
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add skill to skillKnown array
  const addSkillKnown = () => {
    if (newSkillKnown.trim()) {
      setFormData({
        ...formData,
        skillKnown: [...formData.skillKnown, newSkillKnown.trim()]
      });
      setNewSkillKnown("");
    }
  };

  // Remove skill from skillKnown array
  const removeSkillKnown = (index) => {
    setFormData({
      ...formData,
      skillKnown: formData.skillKnown.filter((_, i) => i !== index)
    });
  };

  // Add skill to skillWanted array
  const addSkillWanted = () => {
    if (newSkillWanted.trim()) {
      setFormData({
        ...formData,
        skillWanted: [...formData.skillWanted, newSkillWanted.trim()]
      });
      setNewSkillWanted("");
    }
  };

  // Remove skill from skillWanted array
  const removeSkillWanted = (index) => {
    setFormData({
      ...formData,
      skillWanted: formData.skillWanted.filter((_, i) => i !== index)
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md border w-full">
        <h2 className="text-2xl font-bold">Edit Profile</h2>
        <p className="text-gray-600 mt-2">Update your information</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 bg-white p-8 rounded-xl shadow-md border">
        
        {/* Basic Info Section */}
        <div className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Age & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>

          {/* Phone & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Skills Known Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Skills You Offer
            </label>
            
            {/* Display existing skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.skillKnown.map((skill, index) => (
                <div key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-2">
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkillKnown(index)}
                    className="text-green-900 hover:text-red-600 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Add new skill */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkillKnown}
                onChange={(e) => setNewSkillKnown(e.target.value)}
                placeholder="Add a skill..."
                className="flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={addSkillKnown}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Add
              </button>
            </div>
          </div>

          {/* Skills Wanted Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Skills You Want to Learn
            </label>
            
            {/* Display existing skills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.skillWanted.map((skill, index) => (
                <div key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm flex items-center gap-2">
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkillWanted(index)}
                    className="text-orange-900 hover:text-red-600 font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Add new skill */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkillWanted}
                onChange={(e) => setNewSkillWanted(e.target.value)}
                placeholder="Add a skill..."
                className="flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={addSkillWanted}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Add
              </button>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition font-medium disabled:opacity-50"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </div>

      </form>

    </div>
  );
};

export default EditProfile; 