import fs from 'fs'

// https://gist.github.com/okutbay/5b4974b70673dfdcc21c517632c1f984
const URL =
  // eslint-disable-next-line max-len, prettier/prettier
  'https://gist.githubusercontent.com/okutbay/5b4974b70673dfdcc21c517632c1f984/raw/free_email_provider_domains.txt'

const main = async () => {
  const req = await fetch(URL)
  const res = await req.text()

  const rawData: string[] = res.split('\n')

  const srcDir = `./src`
  const dataDir = `./data`

  const dirs = [srcDir, dataDir]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
  })

  fs.writeFileSync(
    `${srcDir}/constants.ts`,
    `export const DOMAINS = new Set(${JSON.stringify(rawData, null, 2)})`
  )
  fs.writeFileSync(`${dataDir}/data.json`, JSON.stringify(rawData, null, 2))
  fs.writeFileSync(`${dataDir}/data.txt`, rawData.join('\n'))
  fs.writeFileSync(`${dataDir}/data.csv`, `domain\n${rawData.join('\n')}`)
}

main()
