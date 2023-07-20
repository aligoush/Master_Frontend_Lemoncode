let arr1 = [1,5,7,7];
let arr2 = [5,5,88,5,4,5];
let arr3 = [45,5674,54,54,54,0];

const concat = (a, b) => {
    return [...a,...b];
  };

  const concat2 = (...args)=>{
    let result =[];
    for (const arg of args) {
      result.push(...arg);
    }
    return result;
  }
/*
  const concat3 = (...args)=>{
    return args.flat();
  }
*/

  console.log("concat1: " + concat(arr1,arr2));
  console.log("concat2: " + concat2(arr1,arr2,arr3));
  //console.log("concat3: " + concat3(arr1,arr2,arr3));
