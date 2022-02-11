// First algorithm
const addUpTo1 = n => {
    let total = 0
    for (let i=1; i<=n; i++) {
        total += i
    }
    console.log(total)
    return total
}

// Second algorithm
const addUpTo2 = n => {
    return n * (n + 1) / 2
}

// Set start time
let t1 = performance.now()
// Add algorithm below...
addUpTo1(1000000000)
// Set end time
let t2 = performance.now()
// Show time elapsed
console.log(`Time Elapsed: ${ (t2 - t1) / 1000 }`)

/*
Problem with Time
    - machines perform at different speeds
    - for fast algorithms, speed might not be precise enough (they are all too fast)

Counting is an alternative
    - We would count how many operations there are
    - Do the operations grow linearly or exponentially with n? What is their proportion?
    - Less operations is better for an algorithm
*/