//CACHED DOM NODES

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const startButton = document.querySelector('#start');
const driveButton = document.querySelector('#drive');
const deliverButton = document.querySelector('#deliver');
const refuelButton = document.querySelector('#refuel');
const quitButton = document.querySelector('#quit');
const restartButton = document.querySelector('#restart');
//do I need to include all of the Tip, Miles, Pizzas, and Warning buttons?
let milesDisplay = parseInt(document.querySelector('#miles > span').innerHTML);
let tipsDisplay = parseInt(document.querySelector('#tips > span').innerHTML);
let warnings = parseInt(document.querySelector('#warnings > span').innerHTML);
let pizzasLeft = parseInt(document.querySelector('#pizza > span').innerHTML);

//GLOBAL VARS
let orderedPizzas = [
  'pepperoni',
  'hawaiian',
  'pepperoni',
  'cheese',
  'combo',
  'cheese',
  'pepperoni',
  'pepperoni',
  'hawaiian',
  'combo',
  'pepperoni',
  'hawaiian'
]


let deliveredPizzas = [
  'pepperoni',
  'hawaiian',
  'pepperoni',
  'cheese',
  'combo',
  'cheese',
  'pepperoni',
  'pepperoni',
  'hawaiian',
  'combo',
  'pepperoni',
  'hawaiian'
]

//CLASSES
class Driver {
  constructor(name){
    this.name = name;
    this.milesLeft = milesDisplay;
    this.subtractMiles = 0;
    this.tips = 0;
    this.warnings = 0;
    this.pizzas = 12;
    // do I need to connect this to milesDisplay from the cached dom above?
    //for example, could this.tips = tipsDisplay ???????

  }
  deliver(){
    //calls drive() method
    // this.drive();
    //randomizes pizzas? Or is that a different function. Let's do a separate one.
    this.updateMiles();
    this.comparePizzas();


    //update pizzas left to deliver by one
    //if pizzas left to deliver === 0, then you win
    //I want to make it so you have to drive before you deliver - maybe drive isn't a button but is just a function we call here.
  }
  refuel(){
    this.drive();
    let randomMiles = Math.floor(Math.random() * 10) + 1;
    let addedMiles = this.milesLeft += randomMiles;
    document.querySelector('#miles > span').innerHTML = addedMiles;
    this.reduceTips();
    //if the button is clicked then the tips$ are reduced by (a random amount not more than the amount available in tips$ and not 0 OR a set amount?)
    //updates tips
    //and if button is clicked it updates miles left in tank by random amount (because gas prices fluctuate, yo)
  }
  drive(){
   this.subtractMiles = Math.floor(Math.random() * 10) + 1;


  }
  comparePizzas(){
    //create a random string from the deliveredPizzas array
    let randomPizza = Math.floor(Math.random() * deliveredPizzas.length);
    let randomDeliveredPizza = deliveredPizzas[randomPizza];
    // console.log (randomDeliveredPizza)
    // console.log(randomDeliveredPizza)

    //compare it to the first item in the orderedPizzas array
    let firstOrderedPizza = orderedPizzas[0];

    //if they match, invoke tip()

    if (firstOrderedPizza === randomDeliveredPizza) {
      this.tip();
    } else {
      this.warning();
    }


    //remove the first item from the orderedPizzas array;
    orderedPizzas.shift();
    //remove the random string from the deliveredPizzas array
    // function removeDeliveredPizza(deliveredPizzas, randomDeliveredPizza) {
    //   for (let i = 0; i < deliveredPizzas.length; i++){
    //     if (deliveredPizzas[i] === randomDeliveredPizza){
    //       deliveredPizzas.splice(i, 1);
    //     }
    //   }
    // }
    // removeDeliveredPizza(deliveredPizzas, randomDeliveredPizza)
    //array.splice(array.indexOf(memberToRemove), 1)
    deliveredPizzas.splice(deliveredPizzas.indexOf(randomDeliveredPizza), 1);
    // deliveredPizzas.splice(randomDeliveredPizza);
    // let newDeliveredPizzas = deliveredPizzas.filter(randomDeliveredPizza)
    // pizzasLeft = pizzasLeft -1;
    // let newPizzaAmount = this.pizzas - 1
    let subPizzas = --this.pizzas;

    document.querySelector('#pizza > span').innerHTML = subPizzas;

    if(subPizzas <= 0) {
      alert ("You won! Congrats!")
    }

  }

  updateMiles(){
    this.drive();
    let newMiles = this.milesLeft -= this.subtractMiles;
    document.querySelector('#miles > span').innerHTML = newMiles;
    // milesDisplay = newMiles;
    //why doesn't this update the 58 in the browser?

    if (newMiles <= 0) {
      alert ("You lost!")
    }
    //call reset game

  }
  reduceTips(){
    let costOfFuel = Math.floor(Math.random() * 10) + 1;
    //is it possible t0 make sure the costOfGas isn't more than the total tip amount?
    let newTipAmount = this.tips -= costOfFuel;
    document.querySelector('#tips > span').innerHTML = newTipAmount;
    //reduce the tip amount by random amount not more than total amount
    if (newTipAmount <= 0) {
      alert ("You lost!")
    }
  }

  tip(){
    let addTip = Math.floor(Math.random() * 10) + 1;
    let addedTipAmount = this.tips += addTip;
    document.querySelector('#tips > span').innerHTML = addedTipAmount;
    //creates random amount for tip with no remainder. Updates tips$
  }

  warning(){
    let newWarningTotal = this.warnings +=1;
    document.querySelector('#warnings > span').innerHTML = newWarningTotal;
    if (newWarningTotal <=4){
    alert ("You delivered the wrong pizza. You received a warning from your boss.");
    }
    if (newWarningTotal >= 5) {
      alert("This is your fifth and final warning. You delivered the wrong pizza too many times. You're fired.")
      //then call reset function
    }
  }
}
// }

const teo = new Driver('Teo')


// class Customer{
//   constructor(name){
//     this.name = name;
//   }
// ???? I wanted to have the customer tip the driver - so if the correct pizza was received then it would invoke this mthod of tipping.
// }
// const Cat = new Customer('Cat')





//FUNCTIONS

//SHOULD THESE GO IN THE CLASS?



const quit = () => {
  //quit game - alert that they quit and go back to modal? Or back to restart()?

}


const restart = () => {
  //resets all numbers to default
}

const updateTips = () => {

}




const updatePizzas = () => {

}
const updateWarnings = () => {

}



//EVENT LISTENERS

//add eventListener for start - this should remove the modal and show the game with control buttons

deliverButton.addEventListener('click', () => {
  teo.updateMiles();
  teo.comparePizzas();
});
refuelButton.addEventListener('click', () => {
  teo.refuel();
})


//add eventListener for quit - this should end the game and go back to the modal.
//add eventListener for restart - this should set everything back to default.
