/* Values

Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

```javascript
function values(obj) {
  // Implementation here
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]
```

Challenge

Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

```javascript
// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
```
*/


function values(obj) {
  let arr = [];
  for(let elem in obj  ){
    if(Object.hasOwn(obj,elem)){
      arr.push(obj[elem]);
    }
  }
  // return Object.values(obj);
  return arr;
}

// Ejemplo:
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]


// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
