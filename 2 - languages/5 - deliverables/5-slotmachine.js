class SlotMachine {
    constructor(){
      this.monedas = 0;
    }
    girarRuleta = () => Math.random() >= 0.5;

    play(){
      this.monedas++;
      if(this.girarRuleta() && this.girarRuleta() && this.girarRuleta()){
        console.log("Congratulations!!!. You won " + this.monedas + " coins!!");
        this.monedas = 0;
      } else{
        console.log("Good luck next time!!");
      }
    }
  }

  const machine1 = new SlotMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"