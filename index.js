'use strict';
const emoji = require('node-emoji');

class ArrayEmojify {
    constructor() { }

    isString(val) {
        return typeof val === 'string';
    }

    emojify(data, cb) {
        const payload = {
            error: null,
            value: []
        };

        if (Array.isArray(data)) {
            payload.value = data.map(
                item => this.isString(item) && emoji.hasEmoji(item) ?
                    (emoji.emojify(item).toString() !== item ?
                        emoji.emojify(item) : emoji.get(item)) + ' ' : item
            );
        } else {
            if (this.isString(data) && data !== '') {
                payload.value = emoji.emojify(data).toString() !== data ?
                    emoji.emojify(data) : emoji.get(data)
            } else {
                if(data === '') {
                    payload.error = 'String is empty';
                } else {
                    payload.error = 'Data is not array type';
                }
            }
        }

        if (cb) return cb(payload);
        else return payload;
    }
}

module.exports = Object.assign(new ArrayEmojify(), { ArrayEmojify });