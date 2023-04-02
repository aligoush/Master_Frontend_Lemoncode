/*
# Deep Equal

## Apartado A

Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.

**TIP**: Recuerda, los objetos tienen un método `hasOwnProperty` que nos indica si dicho objeto tiene o no una propiedad concreta. Ejemplo `a.hasOwnProperty("name")`, si `a` tiene una propiedad `name` nos devolverá `true`, en caso contrario `false`.

```javascript
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
 ... // Implementation here
}

console.log(isEqual(user, clonedUser)); // true
```

## Apartado B

Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

**TIP**: Recuerda que el operador `typeof` en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, objetos o funciones. Ejemplo, `typeof 12 // "number"` o `typeof {} // "object"`.

```js
var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  ... // Implementation here
}

console.log(isDeepEqual(user, clonedUser)); // true

*/

//Apartado A
function isEqual(obj1, obj2) {
  if(Object.keys(obj1).length === Object.keys(obj2).length){
    for(key in obj1){
      if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
        return false;
      }
    }
    return true;
  }
  return false;
}


var user = { name: "María", age: 30,  surname: "Ibañez", country: "SPA"  };
var clonedUser = { name: "María", age: 30, surname: "Ibañez", country: "SPA"  };

console.log(user === clonedUser); // false
console.log(isEqual(user, clonedUser)); // true



// Apartado B
var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(obj1, obj2) {
  if(Object.keys(obj1).length === Object.keys(obj2).length){
    for(key in obj1){
      if(!obj2.hasOwnProperty(key) || (obj1[key] !== obj2[key] && typeof obj1[key] !== "object" )){
        return false;
      }
      if(typeof obj1[key] === "object"){
        result = isDeepEqual(obj1[key],obj2[key]);
        if(!result){
          return false;
        }
      }

    }
    return true;
  }
  return false;
}

console.log(isDeepEqual(user, clonedUser));
