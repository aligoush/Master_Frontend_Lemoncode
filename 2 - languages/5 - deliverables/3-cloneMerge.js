const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };


function clone(source) {
    let obj = {...source};
    return obj;
}

function merge(source, target) {
    for (const key in source) {
      target[key] = source[key];
    }
    return target;
}

  //verificación
let object = {name: "John", surname: "Smith"};
let objectCloned = clone(object);
console.log(object);
console.log(objectCloned);
console.log(object===objectCloned);


let newObj = merge(a,b);
console.log(newObj);