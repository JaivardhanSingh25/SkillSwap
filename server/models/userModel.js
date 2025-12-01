import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    passHash: {type: String, required: true},
    skillKnown: {type: [String], default: []},
    skillWanted: {type: [String], default: []},
    location: {type: String},
    connections: [{ type: mongoose.Schema.Types.ObjectId , ref: 'user'}]      // $addToSet & $pull will work here for adding/removing friends
}, {timestamps: true})



const User = mongoose.model('user', userSchema);
export default User; 