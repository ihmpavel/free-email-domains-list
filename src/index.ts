import { DOMAINS } from './constants'
import isEmail, { IsEmailOptions } from 'validator/lib/isEmail'

const isEmailValid = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (typeof email !== 'string') {
    return false
  }

  return isEmail(email, emailValidation)
}

const isFreeEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (!isEmailValid(email, emailValidation)) {
    return false
  }

  const domain = email.split('@')[1] ?? ''
  return DOMAINS.has(domain)
}

const isCompanyEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (!isEmailValid(email, emailValidation)) {
    return false
  }

  const domain = email.split('@')[1] ?? ''
  return !DOMAINS.has(domain)
}

export { isFreeEmail, isCompanyEmail, DOMAINS }
