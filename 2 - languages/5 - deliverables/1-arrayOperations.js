
const arr = [1,2,6,77,7];

const head = (arr) => {
    let firstElem;
    if(arr && arr.length > 0 ){
       firstElem = arr[0];
    } else {
        console.log("Array empty or null");
    }
    return firstElem;
};

const tail = (arr) => {
    let arrCopy = [...arr];
    arrCopy.shift();
    return arrCopy;
};

const init = (arr) => {
    let arrCopy = [...arr];
    arrCopy.pop();
    return arrCopy;
};

const last = (arr) => {
    let arrCopy = [...arr];
    return arrCopy.pop();
};

console.log(head(arr));
console.log(tail(arr));
console.log(init(arr));
console.log(last(arr));
console.log(arr);
