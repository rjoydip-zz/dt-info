# ArrayEmojify [![Build Status](https://travis-ci.org/rjoydip/array-emojify.svg?branch=master)](https://travis-ci.org/rjoydip/array-emojify)

> Emojify array values

## Install

```bash
    npm i array-emojify
```

## Usage

```js
const { ArrayEmojify } = require('array-emojify');

const arrayEmojify = new ArrayEmojify();
const firstEmojify = arrayEmojify.emojify(['100', 'coffee', 'heart', ':+1:'], (value) => { /* TODO: value */ });
const secondEmojify = arrayEmojify.emojify(['100', 'coffee', 'heart', ':+1:']);
```

## API

### emojify(data, [cb])

#### data

Type: `Array` | `String`

Data Array for emojify.

#### cb

Type: `Callback`

Return emojify array in callback.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/array-emojify/blob/master/license.md)
