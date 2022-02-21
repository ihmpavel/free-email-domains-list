# Fresh list of all free email domain providers. Can be used to check if an email address belongs to a company. Updated weekly

Sometimes you need to to know, if an email address belongs to company or is registered from free provider. This easy script can tell you. Just call `isCompanyEmail` or `isFreeEmail`

All available domains are available in [src folder](https://github.com/ihmpavel/free-email-domains-list/tree/master/src). They are downloaded from [community maintaned list](https://gist.github.com/okutbay/5b4974b70673dfdcc21c517632c1f984) and updated weekly.

## Usage
| Function | Return value | Example usage |
|---|---|---|---|
| `isFreeEmail(email: string, emailValidation: IsEmailOptions = {})` | `boolean` &#124; `Error('Email is not a string')` | `isFreeEmail('john.doe@gmail.com')` => `true` |
| `isCompanyEmail(email: string, emailValidation: IsEmailOptions = {})` | `boolean` &#124; `Error('Email is not a string')` | `isCompanyEmail('john.doe@gmail.com')` => `false` |

`IsEmailOptions` are available options for email validation from [validator](https://www.npmjs.com/package/validator) library. You can check [test folder](https://github.com/ihmpavel/free-email-domains-list/tree/master/src) for usage.


## Tests
There are `jest` tests which tests basic functionality. Feel free to extend them.

## More packages from me
- [all-iso-language-codes](https://github.com/ihmpavel/all-iso-language-codes) - List of ISO 639-1, 639-2T, 639-2B and 639-3 codes with translations in all available languages
- [expo-video-player](https://github.com/ihmpavel/expo-video-player) - Customizable Video Player controls for Expo
- [free-email-domains-list](https://github.com/ihmpavel/expo-video-player) - Fresh list of all free email domain providers. Can be used to check if an email address belongs to a company. Updated weekly

