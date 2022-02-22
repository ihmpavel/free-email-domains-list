import { isCompanyEmail, isFreeEmail } from '../src'

describe('Is email invalid', () => {
  it('Invalid email free', () => {
    expect(() => isFreeEmail('email_email.com')).toThrow('Email is not valid')
  })
  it('Invalid email company', () => {
    expect(() => isCompanyEmail('email_email.com')).toThrow('Email is not valid')
  })
  it('Invalid input free', () => {
    expect(() => isFreeEmail(123 as unknown as string)).toThrow('Email is not a string')
  })
  it('Invalid input company', () => {
    expect(() => isCompanyEmail(123 as unknown as string)).toThrow('Email is not a string')
  })
  it('Valid email free validation from `validator` package', () => {
    const name = isFreeEmail('john.doeĚŠČŘŽÝÁÍÉ@gmail.com')
    expect(name).toEqual(true)
  })
  it('Valid email company validation from `validator` package', () => {
    const name = isCompanyEmail('john.doeĚŠČŘŽÝÁÍÉ@google.com')
    expect(name).toEqual(true)
  })
  it('Invalid email free validation from `validator` package 1)', () => {
    expect(() =>
      isFreeEmail('john.doeĚŠČŘŽÝÁÍÉ@gmail.com', { allow_utf8_local_part: false })
    ).toThrow('Email is not valid')
  })
  it('Invalid email free validation from `validator` package 2)', () => {
    expect(() =>
      isFreeEmail('john.doeĚŠČŘŽÝÁÍÉ@gmail.com', { allow_utf8_local_part: false })
    ).toThrow('Email is not valid')
  })
  it('Invalid email company validation from `validator` package 1)', () => {
    expect(() =>
      isCompanyEmail('john.doeĚŠČŘŽÝÁÍÉ@gmail.com', { allow_utf8_local_part: false })
    ).toThrow('Email is not valid')
  })
  it('Invalid email company validation from `validator` package 2)', () => {
    expect(() =>
      isCompanyEmail('john.doeĚŠČŘŽÝÁÍÉ@gmail.com', { allow_utf8_local_part: false })
    ).toThrow('Email is not valid')
  })
})

describe('Is free domain provider', () => {
  it('Free email 1)', () => {
    const name = isFreeEmail('john.doe@gmail.com')
    expect(name).toEqual(true)
  })
  it('Free email 2)', () => {
    const name = isFreeEmail('john.doe@email.cz')
    expect(name).toEqual(true)
  })
  it('Free email 3)', () => {
    const name = isFreeEmail('john.doe@google.com')
    expect(name).toEqual(false)
  })
  it('Free email 4)', () => {
    const name = isFreeEmail('john.doe@pepek.cz')
    expect(name).toEqual(false)
  })
})

describe('Is company domain provider', () => {
  it('Company email 1)', () => {
    const name = isCompanyEmail('john.doe@gmail.com')
    expect(name).toEqual(false)
  })
  it('Company email 2)', () => {
    const name = isCompanyEmail('john.doe@email.cz')
    expect(name).toEqual(false)
  })
  it('Company email 3)', () => {
    const name = isCompanyEmail('john.doe@google.com')
    expect(name).toEqual(true)
  })
  it('Company email 4)', () => {
    const name = isCompanyEmail('john.doe@pepek.cz')
    expect(name).toEqual(true)
  })
})

export {}
