/* # This

¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.

```javascript
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());
console.log(surnameFunction.call(person));
``` */
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); // Jiménez, devuelve this.surname del objeto wife
var surnameFunction = person.wife.getSurname; // guardamos la definición de la función en una variable
console.log(surnameFunction()); // Pérez, porque this.surname se refiere a this global donde está la variable var surname = "Pérez";
console.log(surnameFunction.call(person)); // this.surname se refiere al objeto person