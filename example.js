const { ArrayEmojify } = require('./');

// Example 1: ArrayEmojify with return

const ArrayEmojifyEx1 = new ArrayEmojify({
    enableOnKey: true,
    enableOnValue: true,
});
const arrayEmojifyEx1 = ArrayEmojifyEx1.emojify(['100', 'heart', ':+1:']);

console.log(arrayEmojifyEx1);

// Example 2: ArrayEmojify with callback

const ArrayEmojifyEx2 = new ArrayEmojify();
ArrayEmojifyEx2.emojify(['100', 'coffee', 'heart', ':+1:'], (emojify) => {
    if (emojify.error) {
        console.log(emojify.error);
    } else {
        console.log(emojify.value);
    }
});

// Example 3: ArrayEmojify with callback and valid string

const ArrayEmojifyEx3 = new ArrayEmojify();
ArrayEmojifyEx3.emojify(':coffee:', (emojify) => { // ':coffee:' or 'coffee'
    if (emojify.error) {
        console.log(emojify.error);
    } else {
        console.log(emojify.value);
    }
});