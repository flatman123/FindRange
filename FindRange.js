//[1,20] --> returns [1,2,3,4,5,6...20]
let getMiddleNumbers = function(arr){
      let nArr = [];
      let max = Math.max(...arr);
      for (let i = max ; i !== 1+1; i--){
            nArr.push(i - 1) // Push 1 less than i;
      }     
      nArr = arr.concat(nArr);
      let sortNum = nArr.sort((a,b) => a - b);

return sortNum;
}
