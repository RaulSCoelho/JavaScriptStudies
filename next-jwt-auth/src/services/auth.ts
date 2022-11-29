import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

type SignInRequestData = {
  username: string
  password: string
}

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  const salt = await bcrypt.genSaltSync(10)
  const hashedPassword = await bcrypt.hashSync(data.password, salt)
  data.password = hashedPassword

  const token = jwt.sign(data, 'TOKEN_SECRET', {
    expiresIn: 60 * 15,
  })

  return {
    token,
    user: {
      name: 'Raul Semicek Coelho',
      username: data.username,
      avatar_url: 'https://github.com/RaulSCoelho.png',
    },
  }
}

export async function recoverUserInformation(token) {
  await delay()

  try {
    const verified: any = jwt.verify(token, 'TOKEN_SECRET')
    return {
      user: {
        name: 'Raul Semicek Coelho',
        username: verified.username,
        avatar_url: 'https://github.com/RaulSCoelho.png',
      },
    }
  } catch (err) {
    throw new Error('Invalid Token')
  }
}
