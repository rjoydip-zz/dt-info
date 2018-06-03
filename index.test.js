
const { ArrayEmojify } = require('./');

test('ArrayEmojify with return', () => {
    const arrayEmojify = new ArrayEmojify();
    const emojify = arrayEmojify.emojify(['100', 'coffee', 'heart', ':+1:']);
    if (emojify.error) {
        expect(() => {
            throw new Error(emojify.error);
        }).toThrow();
    } else {
        expect(emojify.value).toEqual(['💯 ', '☕️ ', '❤️ ', '👍 ']);
    }
});

test('ArrayEmojify with callback', () => {
    const arrayEmojify = new ArrayEmojify();
    arrayEmojify.emojify(['100', 'coffee', 'heart', ':+1:'], (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual(['💯 ', '☕️ ', '❤️ ', '👍 ']);
        }
    });
});

test('ArrayEmojify with return, blank array', () => {
    const arrayEmojify = new ArrayEmojify();
    const emojify = arrayEmojify.emojify([]);
    if (emojify.error) {
        expect(() => {
            throw new Error(emojify.error);
        }).toThrow();
    } else {
        expect(emojify.value).toEqual([]);
    }
});

test('ArrayEmojify with callback, blank array', () => {
    const arrayEmojify = new ArrayEmojify();
    arrayEmojify.emojify([], (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual([]);
        }
    });
});

test('ArrayEmojify with return, blank string', () => {
    const arrayEmojify = new ArrayEmojify();
    const emojify = arrayEmojify.emojify("");
    if (emojify.error) {
        expect(() => {
            throw new Error(emojify.error);
        }).toThrow();
    } else {
        expect(emojify.value).toEqual([]);
    }
});

test('ArrayEmojify with callback, blank string', () => {
    const arrayEmojify = new ArrayEmojify();
    arrayEmojify.emojify("", (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual([]);
        }
    });
});

test('ArrayEmojify with return, valid string', () => {
    const arrayEmojify = new ArrayEmojify();
    const emojify = arrayEmojify.emojify("coffee");
    if (emojify.error) {
        expect(() => {
            throw new Error(emojify.error);
        }).toThrow();
    } else {
        expect(emojify.value).toEqual('☕️');
    }
});

test('ArrayEmojify with callback, valid string', () => {
    const arrayEmojify = new ArrayEmojify();
    arrayEmojify.emojify(":coffee:", (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('☕️');
        }
    });
});