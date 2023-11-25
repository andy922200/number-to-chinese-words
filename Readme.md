# Number To Chinese Words
將數字轉換成中文數字顯示
An npm package for number formatting to Chinese words

## 安裝 Installation

使用 npm/yarn/pnpm 安裝此 package:

```bash
npm install @andy922200/number-to-chinese-words
yarn add @andy922200/number-to-chinese-words
pnpm add @andy922200/number-to-chinese-words
```

## 使用方法 Usage

```typescript
import { NumberToChinese } from '@andy922200/number-to-chinese-words';

const result = NumberToChinese(1234567.89);

console.log(formattedNumber); // 結果為 一百二十三萬四千五百六十七點八九
```

## Demo
| Number 數字 | Chinese Representation 中文轉換 |
| ------ | ---------------------- |
| 0 | 零 |
| 123 | 一百二十三 |
| -123 | 負一百二十三 |
| maxBigNum | 九千零七兆一千九百九十二億五千四百七十四萬零九百九十一 |
| -maxBigNum | 負九千零七兆一千九百九十二億五千四百七十四萬零九百九十一 |
| 0.45 | 零點四五 |
| 123.45 | 一百二十三點四五 |
| 123.045608 | 一百二十三點零四五六零八 |
| 19010100020100.01 | 十九兆零一百零一億零二萬零一百點零一 |
| -0.45 | 負零點四五 |
| -123.45 | 負一百二十三點四五 |
| -123.045608 | 負一百二十三點零四五六零八 |
| -19010100020100.01 | 負十九兆零一百零一億零二萬零一百點零一 |
| 10 | 十 |
| 100 | 一百 |
| 1000 | 一千 |
| 1000000 | 一百萬 |
| 10000000 | 一千萬 |
| 100000000 | 一億 |
| 1000000000 | 十億 |
| 10000000000 | 一百億 |
| 1000000000000 | 一兆 |
| 3001 | 三千零一 |
| 30001 | 三萬零一 |
| 3000100 | 三百萬零一百 |
| 300020100 | 三億零二萬零一百 |
| 3000000000000100 | 三千兆零一百 |
| 3000010100000100 | 三千兆零一百零一億零一百 |
| 8019010100020100 | 八千零一十九兆零一百零一億零二萬零一百 |
| 8019010100022010 | 八千零一十九兆零一百零一億零二萬二千零一十 |
| -3001 | 負三千零一 |
| -30001 | 負三萬零一 |
| -3000100 | 負三百萬零一百 |
| -300020100 | 負三億零二萬零一百 |
| -3000000000000100 | 負三千兆零一百 |
| -3000010100000100 | 負三千兆零一百零一億零一百 |
| -8019010100020100 | 負八千零一十九兆零一百零一億零二萬零一百 |
| -8019010100022010 | 負八千零一十九兆零一百零一億零二萬二千零一十 |


## 作者 Author
[Andy Lien @andy922200 ](https://github.com/andy922200)