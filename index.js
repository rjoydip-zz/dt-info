'use strict'

const {pick} = require('lodash')

class DTInfo {
    constructor() {
        this._date = new Date()
        this._day = this._date.getDay()
    }

    isKeyValid(key) {
        return (key && key !== '') && typeof key !== 'function'
    }

    info(key, cb) {
        const promise = Promise
        const _info = {
            day: this._day, date: this._date.getDate(),
            month: (this._date.getMonth() + 1), fullYear: this._date.getFullYear(),
            hours: this._date.getHours(), minutes: this._date.getMinutes(),
            seconds: this._date.getSeconds(), milliseconds: this._date.getMilliseconds(),
            week: ((this._day + 6) % 6), time: this._date.getTime(),
            timezoneOffset: this._date.getTimezoneOffset(), UTCFullYear: this._date.getUTCFullYear(),
            UTCMonth: this._date.getUTCMonth(), UTCDate: this._date.getUTCDate(),
            UTCDay: this._date.getUTCDay(), UTCHours: this._date.getUTCHours(),
            UTCMinutes: this._date.getUTCMinutes(), UTCSeconds: this._date.getUTCSeconds(),
            UTCMilliseconds: this._date.getUTCMilliseconds()
        }

        if (typeof key === 'function') {
            cb = key
        }

        if (key && this.isKeyValid(key)) {
            const data = pick(_info, key) || null
            return cb ? cb(null, data) : promise.resolve(data)
        }

        return cb ? cb(null, _info) : promise.resolve(_info)
    }
}

module.exports = Object.assign(new DTInfo(), {DTInfo})
