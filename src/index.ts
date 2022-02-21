import { DOMAINS } from './constants'
import isEmail, { IsEmailOptions } from 'validator/lib/isEmail'

const validateEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (typeof email !== 'string') {
    throw new Error('Email is not a string')
  }

  return isEmail(email, emailValidation)
}

const isFreeEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (!validateEmail(email, emailValidation)) {
    return false
  }

  const domain = email.split('@')[1] ?? ''
  return DOMAINS.has(domain)
}

const isCompanyEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (!validateEmail(email, emailValidation)) {
    return false
  }

  const domain = email.split('@')[1] ?? ''
  return !DOMAINS.has(domain)
}

export { isFreeEmail, isCompanyEmail }
