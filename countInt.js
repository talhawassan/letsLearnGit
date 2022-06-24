// count how many times an item is repeating

function countRepeat (arr,item) {
    let count = 0
    arr.forEach((x) => {
        if(x === item)
        count++
    })
    return count
}
const result = countRepeat([1,2,2,2,3,4,5,6,5], 2)
console.log(result)