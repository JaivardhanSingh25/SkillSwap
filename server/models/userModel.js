import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    passHash: {type: String, required: true},
    skillKnown: {type: [String], default: []},
    skillWanted: {type: [String], default: []},
    location: {type: String}
}, {timestamps: true})



const User = mongoose.model('user', userSchema);
export default User; 