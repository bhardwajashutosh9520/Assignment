const prompt = require('prompt-sync')()

function modString(str) {
  const words = str.split(' ')
  let result = ''
  if (words.length > 0) {
    words.forEach((item) => {
      let modword = ''
      if (item.length > 4) {
        for (i = item.length - 1; i >= 0; i--) {
          modword = `${modword}${item[i]}`
        }
      } else {
        modword = item
      }
      result = `${result} ${modword}`
    })
  }
  return result
}

const string = prompt('Enter your string:')
const testCase1 = modString(string)
console.log('testCase1====', testCase1)
