//CACHED DOM NODES

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const startButton = document.querySelector('#start');
const driveButton = document.querySelector('#drive');
const deliverButton = document.querySelector('#deliver');
const refuelButton = document.querySelector('#refuel');
const quitButton = document.querySelector('#quit');
const restartButton = document.querySelector('#restart');
const controls = document.querySelector('.controls')
const stats = document.querySelector('.stats')
const imageContainer = document.querySelector('.image-container')
let changingBackground = document.querySelector('.image-container img')
const startingImg = document.querySelector('.background')
// const background = document.querySelector('.background > img')
// const characterImg = document.querySelector('.pizza-car img')
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

const backgroundImg = {
  pizzaShopImg: "https://images.pexels.com/photos/1038332/pexels-photo-1038332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  houseImg: ["https://cdn.pixabay.com/photo/2021/04/25/16/43/lighthouse-6207038_960_720.jpg",
            "https://cdn.pixabay.com/photo/2018/03/18/15/26/villa-3237114_960_720.jpg",
            "https://cdn.stocksnap.io/img-thumbs/280h/T0BHAFEFFR.jpg ",
            "https://cdn.stocksnap.io/img-thumbs/280h/camp-outdoor_AD4M0GTYS8.jpg ",
            "https://cdn.pixabay.com/photo/2015/05/29/17/39/noble-789501__340.jpg"
          ],
  gasStationImg: "https://images.unsplash.com/photo-1610992448694-4ba8141986ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FzJTIwc3RhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  modalBackgroundImg: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}



//CLASSES
class Driver {
  constructor(name){
    this.name = name;
    this.milesLeft = milesDisplay;
    this.subtractMiles = 0;
    this.tips = 0;
    this.warnings = 0;
    this.pizzas = 12;
    this.image = "https://img.favpng.com/4/7/23/pizza-delivery-car-pizza-delivery-png-favpng-wHnErXyTBJ1jGcL89s8DRbNLd_t.jpg"
    // do I need to connect this to milesDisplay from the cached dom above?
    //for example, could this.tips = tipsDisplay ???????

  }
  deliver(){

    // body.style.backgroundImage = `url(randomHouseImg)`;
    this.updateMiles();
    this.comparePizzas();


  }
  refuel(){
    changingBackground.setAttribute("src", backgroundImg.gasStationImg);
    this.drive();
    let randomMiles = Math.floor(Math.random() * 10) + 1;
    let addedMiles = this.milesLeft += randomMiles;
    document.querySelector('#miles > span').innerHTML = addedMiles;
    this.reduceTips();
    // body.style.backgroundImage = `url(${backgroundImg.gasStationImg})`;
    //how do I include the pizzaCarImg?????????

  }
  drive(){
   this.subtractMiles = Math.floor(Math.random() * 10) + 1;


  }
  comparePizzas(){

    let randomPizza = Math.floor(Math.random() * deliveredPizzas.length);
    let randomDeliveredPizza = deliveredPizzas[randomPizza];
    let firstOrderedPizza = orderedPizzas[0];
    if (firstOrderedPizza === randomDeliveredPizza) {
      this.tip();
    } else {
      this.warning();
    }
    orderedPizzas.shift();

    deliveredPizzas.splice(deliveredPizzas.indexOf(randomDeliveredPizza), 1);

    let subPizzas = --this.pizzas;

    document.querySelector('#pizza > span').innerHTML = subPizzas;

    if(subPizzas <= 0) {
      alert ("You won! Congrats!")
    } //some way to go back to the modal - toggleModal?

  }

  updateMiles(){
    this.drive();
    let newMiles = this.milesLeft -= this.subtractMiles;
    document.querySelector('#miles > span').innerHTML = newMiles;

    if (newMiles <= 0) {
      alert ("You lost! You didn't have enough gas to make the delivery.");
      restart();
    }

  }
  //????????????????????????????????? need help - go to office hours -
  reduceTips(){
    let costOfFuel = Math.floor(Math.random() * (this.tips - 1) + 1);
    //is it possible to make sure the costOfGas isn't more than the total tip amount?
    // let newTipAmount = this.tips -= costOfFuel;
    let newTipAmount = this.tips -= costOfFuel;
    document.querySelector('#tips > span').innerHTML = newTipAmount;
    //reduce the tip amount by random amount not more than total amount
    if (newTipAmount <= 0) {
      setTimeout(function(){ alert("You lost! You didn't have enough money to fill your tank."); }, 1000);
      restart();
    }
  }

  tip(){
    let addTip = Math.floor(Math.random() * 10) + 1;
    let addedTipAmount = this.tips += addTip;
    document.querySelector('#tips > span').innerHTML = addedTipAmount;
  }


  warning(){

    let newWarningTotal = this.warnings +=1;
    document.querySelector('#warnings > span').innerHTML = newWarningTotal;
    let calcWarn = (5 - newWarningTotal);
    if (newWarningTotal <=4){
      setTimeout(function(){ alert(`You delivered the wrong pizza. You received a warning from your boss. You only have ${calcWarn} warnings left before you are fired.`); }, 700);
    }
    if (newWarningTotal >= 5) {
      alert("You're fired. You delivered the wrong pizza too many times.");
      restart();
    }
  }
}
// }

const teo = new Driver('Teo')


//FUNCTIONS
//start game

const toggleModal = () => {
  startingImg.classList.add('open');
  modal.classList.toggle('open');
//or should the background img go here?
  // background.setAttribute("src", backgroundImg.modalBackgroundImg);
}

const startGame = () => {
  toggleModal();

} // what does this do?

const openGame = () => {
  //do I now need to remove the background classList?
  startingImg.classList.remove('open');
  modal.classList.remove('open');
  controls.classList.add('open');
  stats.classList.add('open');
  imageContainer.classList.add('open');
  changingBackground.setAttribute("src", backgroundImg.pizzaShopImg)
  //toggle the background image off?

  // characterImg.setAttribute("src", pizzaCarImg)
  // body.style.backgroundImage = `url(${backgroundImg.pizzaShopImg})`;
  //how do I also get the car to appear on top?

//     const openCarousel = () => {
//     carousel.classList.add('open');
//     carouselImg.setAttribute("src", backgroundImage[currentSlide]);
//     toggleModal();
// }
 }




// const playGame = () => {
//   modal.classList.remove('open');
//   body.style.backgroundImage = `url(${backgroundImage...????})`
// } ////??????????????



// const quit = () => {
//   modal.classList.add('open');
//   controls.classList.remove('open');
//   stats.classList.remove('open');
//   //quit game - alert that they quit and go back to modal? Or back to restart()?
//   //do I need this if the eventListener has it go back to modal?
//
// }


const restart = () => {
  restart = location.reload();
  // toggleModal();
  //do I need the image here?

  }

changeImg = () => {
  let randomHouseImg = backgroundImg.houseImg[Math.floor(Math.random() * backgroundImg.houseImg.length)];
  changingBackground.setAttribute("src", randomHouseImg)
};

//fill up tank to 300


//EVENT LISTENERS
//secret fill up tank event listener????
//gives alert: "Super secret gas tank filler-upper has been activated"
//call a function that fills up gas tank to 300, with delay for after alert

window.onload = () => {
  startGame();
}

startButton.addEventListener('click', () => {
  openGame();
})

deliverButton.addEventListener('click', () => {
  changeImg();
  teo.updateMiles();
  teo.comparePizzas();
});
refuelButton.addEventListener('click', () => {
  teo.refuel();
})
restartButton.addEventListener('click', restart, false);
quitButton.addEventListener('click', () => {
  // quit();
  restart();
})
