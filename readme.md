# Date Time Info [![Build Status](https://travis-ci.org/rjoydip/dt-info.svg?branch=master)](https://travis-ci.org/rjoydip/dt-info)

> Get date and time info

## Install

```bash
$ npm i dt-info
```

## Usage

```js
// const dtInfo = require('dt-info')
const { DTInfo } = require('dt-info');
const dtInfo = new DTInfo();
```

Return data using `promise`.

### Example

```js
dtInfo.info(['day', 'minutes']).then(result => {
    console.log('result', result)
}).catch(error => {
    console.log('error', error)
})
```

Return data using `callback`.

### Example

```js
dtInfo.info(['day', 'minutes'], (error, result) => {
    console.log('result', result)
    console.log('error', error)
})
```

Return data without `key` with `promise`.

### Example

```js
dtInfo.info().then(result => {
    console.log('result', result)
}).catch(error => {
    console.log('error', error)
})
```

Return data without `key` with `callback`.

### Example

```js
dtInfo.info((error, result) => {
    console.log('result', result)
    console.log('error', error)
})
```

## Output

```js
{
    day: 0,
    date: 24,
    month: 6,
    fullYear: 2018,
    hours: 14,
    minutes: 23,
    seconds: 7,
    milliseconds: 510,
    week: 0,
    time: 1529829487510,
    timezoneOffset: -345,
    UTCFullYear: 2018,
    UTCMonth: 5,
    UTCDate: 24,
    UTCDay: 0,
    UTCHours: 8,
    UTCMinutes: 38,
    UTCSeconds: 7,
    UTCMilliseconds: 510
}
``

## API

### new DTInfo()

Returns a new instance.

### Instance

#### .info([key, Promise | Callback])

Returns a `Promise/Callback` for a result `Object` with a `Error`.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/dt-info/blob/master/license.md)
