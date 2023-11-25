import { NumberToChinese } from './index'

const maxBigNum = 9007199254740991

describe('NumberToChinese', () => {
  test('should convert 0 to 零', () => {
    expect(NumberToChinese(0)).toBe('零')
  })

  test('should correctly convert positive integers', () => {
    expect(NumberToChinese(123)).toBe('一百二十三')
  })

  test('should correctly convert negative integers', () => {
    expect(NumberToChinese(-123)).toBe('負一百二十三')
  })

  test('should correctly convert maximum boundary value', () => {
    expect(NumberToChinese(maxBigNum)).toBe(
      '九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
    )
    expect(NumberToChinese(-maxBigNum)).toBe(
      '負九千零七兆一千九百九十二億五千四百七十四萬零九百九十一',
    )
  })

  test('should correctly convert positive decimals', () => {
    expect(NumberToChinese(0.45)).toBe('零點四五')
    expect(NumberToChinese(123.45)).toBe('一百二十三點四五')
    expect(NumberToChinese(123.045608)).toBe('一百二十三點零四五六零八')
    expect(NumberToChinese(19010100020100.01)).toBe('十九兆零一百零一億零二萬零一百點零一')
  })

  test('should correctly convert negative decimals', () => {
    expect(NumberToChinese(-0.45)).toBe('負零點四五')
    expect(NumberToChinese(-123.45)).toBe('負一百二十三點四五')
    expect(NumberToChinese(-123.045608)).toBe('負一百二十三點零四五六零八')
    expect(NumberToChinese(-19010100020100.01)).toBe('負十九兆零一百零一億零二萬零一百點零一')
  })

  test('should correctly handle numbers with trailing zeros', () => {
    expect(NumberToChinese(10)).toBe('十')
    expect(NumberToChinese(100)).toBe('一百')
    expect(NumberToChinese(1000)).toBe('一千')
    expect(NumberToChinese(1000000)).toBe('一百萬')
    expect(NumberToChinese(10000000)).toBe('一千萬')
    expect(NumberToChinese(100000000)).toBe('一億')
    expect(NumberToChinese(1000000000)).toBe('十億')
    expect(NumberToChinese(10000000000)).toBe('一百億')
    expect(NumberToChinese(1000000000000)).toBe('一兆')
  })

  test('should correctly handle positive numbers with consecutive zeros', () => {
    expect(NumberToChinese(3001)).toBe('三千零一')
    expect(NumberToChinese(30001)).toBe('三萬零一')
    expect(NumberToChinese(3000100)).toBe('三百萬零一百')
    expect(NumberToChinese(300020100)).toBe('三億零二萬零一百')
    expect(NumberToChinese(3000000000000100)).toBe('三千兆零一百')
    expect(NumberToChinese(3000010100000100)).toBe('三千兆零一百零一億零一百')
    expect(NumberToChinese(8019010100020100)).toBe('八千零一十九兆零一百零一億零二萬零一百')
    expect(NumberToChinese(8019010100022010)).toBe('八千零一十九兆零一百零一億零二萬二千零一十')
  })

  test('should correctly handle negative numbers with consecutive zeros', () => {
    expect(NumberToChinese(-3001)).toBe('負三千零一')
    expect(NumberToChinese(-30001)).toBe('負三萬零一')
    expect(NumberToChinese(-3000100)).toBe('負三百萬零一百')
    expect(NumberToChinese(-300020100)).toBe('負三億零二萬零一百')
    expect(NumberToChinese(-3000000000000100)).toBe('負三千兆零一百')
    expect(NumberToChinese(-3000010100000100)).toBe('負三千兆零一百零一億零一百')
    expect(NumberToChinese(-8019010100020100)).toBe('負八千零一十九兆零一百零一億零二萬零一百')
    expect(NumberToChinese(-8019010100022010)).toBe('負八千零一十九兆零一百零一億零二萬二千零一十')
  })
})
