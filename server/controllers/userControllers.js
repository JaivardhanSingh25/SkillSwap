import User from "../models/userModel.js";

export const getUserInfo = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user){
            return res.status(404).json({
                success: false,
                message: 'User Not Found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'User Found',
            user
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error
        })
    }
}


export const updateUserInfo = async (req, res) => {
  try {
    const userId = req.params.id;

    // req.body will contain ONLY what needs to be updated
    // e.g. { name: "Rahul" }
    // or { age: 22 }
    // or { location: "Mumbai" }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },   // <-- ONLY update the incoming fields
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated",
      user: updatedUser,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};



export const searchUsers = async (req, res) => {
    try{
        const {skill, location} = req.query;
        const arraySkills = skill.split(',').map(s => s.trim());               // trim has been used so that there are no spaces.... used in comparison
        const users = await User.find({
            location: location,
            skillKnown: { $in: arraySkills }                                    // isme bas wo hai ki skillKnown ka koi element arraySkills mei ho tab..

        })
        if (users.length === 0){
            return res.status(404).json({
                success: false,
                message: 'Users Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Found',
            users
        })
    }
    catch(error){
        return res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error
            })
    }
}
