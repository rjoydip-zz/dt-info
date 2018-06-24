# Time Date Info [![Build Status](https://travis-ci.org/rjoydip/datetimeinfo.svg?branch=master)](https://travis-ci.org/rjoydip/datetimeinfo)

> Emojify array values

## Install

```bash
    npm i datetimeinfo
```

## Usage

```js
// const dtInfo = require('datetimeinfo')
const { DateTimeInfo } = require('datetimeinfo');
const dtInfo = new DateTimeInfo();
```

## Example 1

```js
dtInfo.info(['day', 'minutes']).then(result => {
    console.log('result 1', result)
}).catch(error => {
    console.log('error 1', error)
})
```

## Example 2

```js
dtInfo.info(['day', 'minutes'], (error, result) => {
    console.log('result 2', result)
    console.log('error 2', error)
})
```

### Example 3

```js
dtInfo.info().then(result => {
    console.log('result 3', result)
}).catch(error => {
    console.log('error 3', error)
})
```

### Example 4

```js
dtInfo.info((error, result) => {
    console.log('result 4', result)
    console.log('error 4', error)
})
```

## API

### new DateTimeInfo()

Returns a new instance.

### Instance

#### .info([key, Promise | Callback])

Returns a `Promise/Callback` for a result `Object` with a `Error`.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/datetimeinfo/blob/master/license.md)
