import jwt from 'jsonwebtoken';

export const authMiddle = (req, res) => {
    const token = req.headers.authorization   // for this to work... you need to set the headers globally as just token not Bearer <token>
     
    if (!token) {
        return res.status(401).json({
        success: false,
        message: "No token provided (Unauthorized)",
    });
    }

    try{
        jwt.verify(token, process.env.JWT_SECRET)
        next()
    }
    catch(error){
        res.status(401).json({
            success: false,
            message: 'Token Invalid (Unauthorised)'
        })
    }
}