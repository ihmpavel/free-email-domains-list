import fetch from 'node-fetch'
import fs from 'fs'

// https://gist.github.com/okutbay/5b4974b70673dfdcc21c517632c1f984
const URL =
  // eslint-disable-next-line max-len, prettier/prettier
  'https://gist.githubusercontent.com/okutbay/5b4974b70673dfdcc21c517632c1f984/raw/7d0d5bd8e9c58541a7d5671989f757dee20c39d1/free_email_provider_domains.txt'

const main = async () => {
  const req = await fetch(URL)
  const res = await req.text()

  const rawData: string[] = res.split('\n')

  const dir = `./src`
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  fs.writeFileSync(
    `${dir}/constants.ts`,
    `export const DOMAINS = new Set(${JSON.stringify(rawData, null, 2)})`
  )
}

main()
