import { DOMAINS } from './constants'
import isEmail, { IsEmailOptions } from 'validator/lib/isEmail'

const validateEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  if (typeof email !== 'string') {
    throw new Error('Email is not a string')
  }

  if (!isEmail(email, emailValidation)) {
    throw new Error('Email is not valid')
  }
}

const isFreeEmail = (email: string, emailValidation: IsEmailOptions = {}) => {
  validateEmail(email, emailValidation)

  const domain = email.split('@')[1] ?? ''
  return DOMAINS.has(domain)
}

const isCompanyEmail = (email: string, emailValidation: IsEmailOptions = {}) =>
  !isFreeEmail(email, emailValidation)

export { isFreeEmail, isCompanyEmail }
