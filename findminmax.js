function findMindandMAx (arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    for(let number of arr){
        if(number > max)
          max = number
          if(number < min)
          min = number
    }
    return max
}
const result = findMindandMAx([2,1,8,3,7])
console.log(result)