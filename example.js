const {DateTimeInfo} = require('.') // Const dtInfo = require('.')

const dtInfo = new DateTimeInfo()

// Example 1
dtInfo.info(['day', 'minutes']).then(result => {
    console.log('result 1', result)
}).catch(error => {
    console.log('error 1', error)
})

// Example 2
dtInfo.info(['day', 'minutes'], (error, result) => {
    console.log('result 2', result)
    console.log('error 2', error)
})

// Example 3
dtInfo.info().then(result => {
    console.log('result 3', result)
}).catch(error => {
    console.log('error 3', error)
})

// Example 4
dtInfo.info((error, result) => {
    console.log('result 4', result)
    console.log('error 4', error)
})
