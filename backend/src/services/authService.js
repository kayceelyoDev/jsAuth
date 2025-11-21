const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//secret key
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key'

const registerUser = async(email,password)=>{
    const existingUser = await prisma.user.findUnique({
        where:{email}
    })

    if (existingUser) {
    throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password,salt)

    const user = await prisma.user.create({
    data: {
      email,
      password: hashedpassword,
      
    }
    });

    // 4. Return user info (but NOT the password!)
    return { id: user.id, email: user.email };
}

const loginUser = async (email , password) => {
  const user = await prisma.user.findUnique({
    where:{email}
  })

  if(!user){
  throw new Error('Invalid email or password');
  }

  const isMatch  = await bcrypt.compare(password,user.password)

  if(!isMatch){
    throw new Error('Invalid email or password')
  }

  const token = jwt.sign(
    {userId : user.id, email: user.email},
    JWT_SECRET,
    {expiresIn: '1h'}
  )
  return{
    user : {id:user.id , email: user.email},
    token
  }
}


module.exports = {
  registerUser,
  loginUser
};