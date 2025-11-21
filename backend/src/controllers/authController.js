const authService = require('../services/authService')

const register = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ Error: "Email and password are required" })
        }

        const user = await authService.registerUser(email, password)

        res.status(201).json({
            message: 'user Regisered Succesfully',
            user
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const login = async (req,res) => {
    try {
        const { email, password } = req.body;

        // Basic Validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const data = await authService.loginUser(email,password)

        res.status(200).json({
            message:'login successful',
            user: data.user,
            token:data.token
        })

    } catch (error) {
        res.status(401).json({error:error.message})
    }
}


module.exports = {
    register,
    login
};