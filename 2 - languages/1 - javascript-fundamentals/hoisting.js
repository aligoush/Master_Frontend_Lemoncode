/* # Hoisting

**NOTA**: Realiza estos ejercicios en vanilla JS. Si estás utilizando un playground de TypeScript obtendrás errores.

## Apartado A

¿Cual crees que será el resultado de la consola y porqué?

**TIP**: escribe el código equivalente.

```javascript
function f() {
  console.log(a);
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);
}

f();
```

## Apartado B

¿Y ahora?

```javascript
var a = 1;

(function() {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b);
console.log(c);
```

## Apartado C

¿Y con esta ligera variación?

```javascript
f();
var a = 1;

function f() {
  console.log(a);
  b = 4;
  var c = 3;
}

console.log(a);
console.log(b);
console.log(c);
```
 */


// Apartado A

function f() {
  var a;
  function g() {
    return a;
  }
  console.log(a);
  console.log(g());

  a = "good job!";
  console.log(a);
}

f();


// Apartado B

var a;
a = 1;
(function() {
  var a;
  var c;
  console.log(a);
  a = 2;
  b = 4;
  c = 3;
})();

console.log(a);
console.log(b);
console.log(c);


// Apartado C

var a;
function f() {
  var c;
  console.log(a);
  c = 3;
}
f();
a = 1;
b = 4;

console.log(a);
console.log(b);
console.log(c);