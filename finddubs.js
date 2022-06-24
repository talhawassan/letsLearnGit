// find and remove duplicates in an array

function findDubs (arr) {
      let newArr = []
      let dubItems = []
      for(let i = 0; i < arr.length; i++){
          if(!newArr.includes(arr[i])){
              newArr.push(arr[i])
          }else{
              dubItems.push(arr[i])
          }
      }
      return dubItems
}
const result = findDubs([1,2,3,2,3,4,5])
console.log(result)