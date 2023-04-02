/* # Dices

Empleando el concepto de _closure_, emula el comportamiento de 2 dados.

Utiliza un _closure_ para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

- Hacer reset, poner a `undefined` o `null` ambos resultados.
- Tirar los dados. **TIP**: Usa `Math.random()` para tiradas aleatorias.
- Imprimir el resultado por consola. Ten en cuenta lo siguiente:
  - Informa al usuario que debe tirar primero cuando corresponda.
  - Si saca doble 6, ¡dale un premio! */

  class Dices {
    firstDice;
    secondDice;
    constructor(){
      console.log("Now throw the dices!");
    }

    reset(){
      this.firstDice = undefined;
      this.secondDice = undefined;
    }

    throwDices(){
      this.firstDice = Math.floor(Math.random()*(6-1+1)+1);
      this.secondDice = Math.floor(Math.random()*(6-1+1)+1);
    }

    printResults(){
      if(this.firstDice === 6 && this.secondDice === 6){
        console.log("Congrats! You won the prize!");
      } else {
        console.log(this.firstDice + "-" + this.secondDice + " Oh no! You've lost. Would you try it again?");
        var input = prompt("Please in order to throw the dices, enter 'Y' for yes and 'N' for no");
        if(input === "Y" || input === "y"){
          game.reset();
          game.throwDices();
          game.printResults();
        } else {
          console.log("Try again tomorrow!");
        }
      }
    }
  }
  let game = new Dices();
  game.throwDices();
  game.printResults();

