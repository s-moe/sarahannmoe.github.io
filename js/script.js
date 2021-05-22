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
let milesDisplay = document.querySelector('#miles > span').innerHTML;
// milesDisplay.innerHTML
//
console.log(milesDisplay);
milesDisplay = "60";
console.log(milesDisplay);

//CLASSES
class Driver {
  constructor(name, miles){
    this.name = name;
    this.miles = miles; // do I need to connect this to milesDisplay from the cached dom above?

  }
  deliver(){
    //calls drive() method
    //randomizes pizzas? Or is that a different function. Let's do a separate one. 
    // if the button is clicked then the pizzas arrays are compared, if they are the same, tip(), if they are different update warnings, and if the warnings === 3, you lose
    //update pizzas left to deliver by one
    //if pizzas left to deliver === 0, then you win
    //I want to make it so you have to drive before you deliver - maybe drive isn't a button but is just a function we call here.
  }
  refuel(){
    //calls drive() method
    //if the button is clicked then the tips$ are reduced by (a random amount not more than the amount available in tips$ and not 0 OR a set amount?)
    //updates tips
    //and if button is clicked it updates miles left in tank by random amount (because gas prices fluctuate, yo)
  }
  drive(){

   let num = Math.floor(Math.random() * 10) + 1;
  //  return num this works for testing if a num appears

  // milesDisplay.innerHTML // tank reduces by num or calls updateMiles?
    //if miles left in tank === 0, alert you lose

  }

  // updateMiles(){
  //   drive();
  //   let newMiles = this.miles -= num;
  //   milesDisplay.innerHTML =
  //   <div class = 'miles btn'>
  //     Miles left in tank: <span>newMiles</span>
  //   </div>
  // }
  // updateMiles()
//this.miles -= num ?  // tank reduces by num or calls updateMiles?
    //if miles left in tank === 0, alert you lose
    // milesDisplay.innerHTML = //this.miles - num;

// }
}

const Teo = new Driver ('Teo')


class Customer{
  constructor(name){
    this.name = name;
  }
  tip(){
    //creates random amount for tip with no remainder. Updates tips$
  }
}
const Cat = new Customer('Cat')


//GLOBAL VARS
const orderedPizzas = [
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


const deliveredPizzas = [
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
//add eventListener for deliver - this should call the deliver method, drive, update miles, update pizzas
//add eventListener for refuel - this should call the drive, tips?, update tips, update miles
//add eventListener for quit - this should end the game and go back to the modal.
//add eventListener for restart - this should set everything back to default.
