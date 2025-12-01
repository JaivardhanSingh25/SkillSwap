import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const signupController = async (req, res) => {
    try{
        const {name, age, email, phone, password, skillKnown, skillWanted, location} = req.body;
    // extracted info to be used to create a new user right..
    const user = await User.findOne({email})
    if (user){
        return res.status(409).json({
            success: false,
            message: 'User already exists'
        })
    }

    const hashedPass = await bcrypt.hash(password, 10);
    // now we have to create a new user right... no other checks to do... just the one where the user could already exist
    await User.create({
        name: name, age: age, email: email, phone: phone, passHash: hashedPass, skillKnown: skillKnown, skillWanted: skillWanted, location: location
    })
    res.status(201).json({
        success: true,
        message: 'User Registered'
    })
    }

    catch(error){
        return res.status(500).json({ message: "Something went wrong", error });
    }
};



export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User does not Exist. Proceed to Signup.',                                      
            })

        }
        const comparePass = user.passHash
        if (await bcrypt.compare(password, comparePass)){
            // create json webtoken and send in response
            const token = jwt.sign({email: user.email}, process.env.JWT_SECRET);

            return res.status(200).json({
                success: true,
                message: 'Logged In',
                token,
                userID: user._id
            })


        }
        else{
            return res.status(401).json({
                success: false,
                message: 'Wrong Password'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}