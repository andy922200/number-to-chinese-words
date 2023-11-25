/**
 * format number to Chinese Character
 * @param {number} rawNum - The number to be formatted
 * @return {string} - The string of formatted Number
 */

export const NumberToChinese = function (rawNum: number): string {
  if (rawNum === 0) return '零'

  const chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const chnUnitChar = [
    '',
    '十',
    '百',
    '千',
    '萬',
    '十',
    '百',
    '千',
    '億',
    '十',
    '百',
    '千',
    '兆',
    '十',
    '百',
    '千',
  ]

  // handle negative number
  const prefix = rawNum < 0 ? '負' : ''
  const target = Math.abs(rawNum)

  // separate integer part and float part
  const integerPart = Math.floor(target)

  // convert integer part
  const integerPartResult = convertIntegerPart(integerPart, chnNumChar, chnUnitChar)

  // convert float part
  const floatPartResult = convertFloatPart(rawNum, chnNumChar)

  return prefix + integerPartResult + floatPartResult
}

const convertIntegerPart = (
  integerPart: number,
  chnNumChar: string[],
  chnUnitChar: string[],
): string => {
  if (integerPart === 0) return ''

  let result = ''
  let unitPos = 0
  let zero = true

  while (integerPart > 0) {
    const v = integerPart % 10
    if (v === 0) {
      if (!zero) {
        zero = true
        result = chnNumChar[v] + result
      }
    } else {
      zero = false
      result = chnNumChar[v] + chnUnitChar[unitPos] + result
    }
    unitPos++
    integerPart = Math.floor(integerPart / 10)

    // Process '萬', '億', '兆' every four digits
    if (unitPos % 4 === 0 && integerPart > 0) {
      result = chnUnitChar[unitPos] + result
      zero = true
    }
  }

  // Remove unnecessary '萬', '億', '兆' at the end
  result = result
    .replace(/(億)萬/g, '億')
    .replace(/(兆)億/g, '兆')
    .replace(/(萬萬|億億|兆兆)+/g, (match) => match.slice(0, -1))

  return result.replace(/^一十/, '十') // Case when it starts with '一十'
}

const convertFloatPart = (rawNum: number, chnNumChar: string[]): string => {
  const numStr = rawNum.toString()
  const dotIndex = numStr.indexOf('.')

  if (dotIndex === -1) return '' // No decimal part

  let result = Math.floor(rawNum) === 0 || (rawNum < 0 && rawNum > -1) ? '零點' : '點'
  for (let i = dotIndex + 1; i < numStr.length; i++) {
    const digit = numStr.charAt(i)
    result += chnNumChar[parseInt(digit, 10)]
  }

  return result
}
