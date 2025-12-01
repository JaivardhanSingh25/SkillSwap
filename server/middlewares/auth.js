import jwt from 'jsonwebtoken';

export const authMiddle = (req, res, next) => {
    const authHeader = req.headers.authorization   // for this to work... you need to set the headers globally as just token not Bearer <token>
     
    if (!authHeader) {
        return res.status(401).json({
        success: false,
        message: "No token provided (Unauthorized)",
    });
    }

    const token = authHeader.split(' ')[1]; // strip "Bearer "

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