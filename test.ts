// tests go here; this will not be compiled when this package is used as a library

basic.forever(() => {
    console.log(banana.bananas(3))
    basic.pause(1000)
    console.log(banana.bananaMultiplier(3))
    basic.pause(1000)
    console.log(banana.bananaMultiply(3, 3))
    basic.pause(1000)
})
