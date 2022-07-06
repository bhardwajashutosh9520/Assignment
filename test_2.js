function correctStr(str) {
  const words = str.split(' ')
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  let result = ''
  console.log('item---', words)
  if (words.length > 0) {
    let senEnd = false

    words.forEach((item, i) => {
      if (item.length > 0) {
        if (format.test(item)) {
          result = `${result} ${item}`
        } else if (item[0].toUpperCase() === item[0]) {
          result = `${result}. ${item}`
        } else {
          if (i === 0) {
            result = `${item[0].toUpperCase()}${item.substring(1, item.length)}`
          } else {
            if (senEnd) {
              result = `${result} ${item[0].toUpperCase()}${item.substring(
                1,
                item.length,
              )}`
              senEnd = false
            } else {
              result = `${result} ${item}`
            }
          }
        }
        if (item[item.length - 1] === '.') {
          senEnd = true
        }
      }
    })
  }

  if (result[result.length - 1] !== '.') {
    result = `${result}.`
  }
  return result
}

const testCAse1 = correctStr(
  '   john`s have     a n   aPPle , The sky is  /  blue.   they get a. coin',
)

console.log('result---', testCAse1)
