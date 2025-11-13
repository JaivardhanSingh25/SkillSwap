import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    requestFrom: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    requestTo: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    accepted: {type: Boolean, default: false},
}, {timestamps: true})

// the image property has a string format because the image url will be stored as a string in this schema....

const Request = mongoose.model('request', requestSchema);
export default Request; 