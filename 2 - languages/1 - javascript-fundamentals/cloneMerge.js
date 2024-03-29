/*
# Clone Merge

## Apartado A

Implementa una función `clone` que devuelva un objeto clonado a partir de otro:

```javascript
function clone(source) {
  // Implementation here.
}
```

## Apartado B

Dados dos objetos cualesquiera, implementa una función `merge` que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto `source` sobre las del objeto `target`.

**TIP**: Usa la función `clone` del apartado A.

```javascript
function merge(source, target) {
  // Implementation here.
}

// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
```
*/

// Apartado A
function clone(source) {
  let obj = {...source};
  return obj;
}

// Apartado B
function merge(source, target) {
  let obj = clone(source);
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

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
var newObj = merge(a,b);
console.log(newObj);
