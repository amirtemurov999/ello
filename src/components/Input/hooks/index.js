const arr = [2, 6, 8, 2, 9]

function myFilter(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i])
        }
    }
    return result
}
console.log()