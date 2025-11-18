import Request from "../models/requestModel.js";




export const createReq = async (req, res) => {
    try{
        const {send, recieve} = req.body;  // send is the id of the one who sent and recieve is the id of the person to whom the request was sent 
        
        const existing = await Request.findOne({
            requestFrom: send,
            requestTo: recieve,
            accepted: false
        });

        if (existing) {
            return res.status(400).json({
            success: false,
            message: "Request already sent"
        });
}    
        await Request.create({
            requestFrom: send,
            requestTo: recieve
        })
        return res.status(201).json({                 // 201 status code is fortelling that creation was successful....
            success: true,
            message: 'Request Sent'
        })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}



export const acceptReq = async (req, res) => {
    try{
        const {id} = req.params;                                   // document ki id hai bhai 
        await Request.findByIdAndUpdate(id, {accepted: true});
        return res.status(200).json({
            success: true,
            message: 'Accepted'
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
    })}
}



export const declineReq = async (req, res) => {
    try{
        const {id} = req.params;                                 // ye document ki id hai alright
        await Request.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: 'Declined'
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
    })
    }
}



export const getConnections = async (req, res) => {
    try{
        const {userId} = req.params;
        const connections = await Request.find({requestTo: userId, accepted: true}).populate("requestFrom", "name email skillKnown");
        // even if the requests are empty... we will handle it in the frontend during rendering
        return res.status(200).json({
            success: true,
            message: 'Mil gye oiii',
            connections
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}



export const getReq = async (req, res) => {
    try{
        const {userId} = req.params;
        const requests = await Request.find({requestTo: userId, accepted: false}).populate("requestFrom", "name email skillKnown");
        // even if the requests are empty... we will handle it in the frontend during rendering
        return res.status(200).json({
            success: true,
            message: 'Mil gye oiii',
            requests
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}



