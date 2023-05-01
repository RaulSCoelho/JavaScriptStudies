import bcrypt from 'bcryptjs'

export async function hashWord(word: string) {
  const salt = await bcrypt.genSalt(10)
  const hashedWord = await bcrypt.hash(word, salt)
  return hashedWord
}

export async function isHashValid(word1: string, word2: string) {
  const isValid = await bcrypt.compare(word1, word2)
  return isValid
}
