const {DateTimeInfo} = require('.')

const dtInfo = new DateTimeInfo()

test('DateTimeInfo with promise', () => {
    dtInfo.info(['day', 'minutes']).then(result => {
        expect(result).toBeTruthy()
    }).catch(error => {
        expect(() => {
            throw new Error(error)
        }).toThrow()
    })
})

test('DateTimeInfo with empty array and promise', () => {
    dtInfo.info([]).then(result => {
        expect(result).toEqual({})
    }).catch(error => {
        expect(() => {
            throw new Error(error)
        }).toThrow()
    })
})

test('DateTimeInfo with callback', () => {
    dtInfo.info([], (error, result) => {
        expect(result).toBeTruthy()
        expect(error).toEqual(null)
    })
})

test('DateTimeInfo with blank array callback', () => {
    dtInfo.info([], (error, result) => {
        expect(result).toEqual({})
        expect(error).toEqual(null)
    })
})

test('DateTimeInfo where key become callback with callback', () => {
    dtInfo.info([], (error, result) => {
        expect(result).toBeTruthy()
        expect(error).toEqual(null)
    })
})