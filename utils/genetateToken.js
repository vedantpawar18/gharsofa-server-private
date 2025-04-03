import jwt from "jsonwebtoken";

export const generateToken = (res, user) => {
    const token = jwt.sign({ id: user._id, role: user.role, username: user.firstName }, process.env.SECRET_KEY, { expiresIn: "1h" })

    res.cookie("jwtToken", token, {
        httpOnly: true,       // Prevents JavaScript access
        secure: true,         // Required for HTTPS (Railway uses HTTPS)
        sameSite: "None",     // Required for cross-origin requests with credentials
        maxAge: 3600000,      // Optional: Set cookie expiration (1 hour)
    })
} 
