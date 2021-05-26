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
const changingBackground = document.querySelector('.image-container img')
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
  pizzaShopImg: "https://image.shutterstock.com/image-illustration/front-view-pizza-shop-restaurant-260nw-1575914101.jpg",
  houseImg: ["https://img.favpng.com/12/5/23/framing-architectural-engineering-building-plaster-project-png-favpng-JbGnXXNHrgUbEhXXGZJygxeAr.jpg",
            "https://img.favpng.com/0/17/1/cartoon-poster-wallpaper-png-favpng-iDn1P8cRta1C2hELsw56fj222.jpg",
            "https://img.favpng.com/22/11/8/dog-houses-angle-png-favpng-Sji48SYrSQckcgGdbJ0qxryzf.jpg",
            "https://img.favpng.com/22/24/18/saint-basil-s-cathedral-saint-isaac-s-cathedral-cathedral-of-the-archangel-ivan-the-great-bell-tower-moscow-kremlin-png-favpng-sK5E5cf0DndKmwbfPnQh1Ltgk_t.jpg",
            "https://img.favpng.com/7/13/17/tent-camping-namib-png-favpng-NQ0URGY5xExdvCUVz3PRTvJBN_t.jpg"
          ],
  gasStationImg: "https://images.unsplash.com/photo-1610992448694-4ba8141986ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FzJTIwc3RhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
}

//randomize the houseImg:
let randomHouseImg = backgroundImg.houseImg[Math.floor(Math.random() * backgroundImg.houseImg.length)];

const pizzaCarImg = "https://img.favpng.com/4/7/23/pizza-delivery-car-pizza-delivery-png-favpng-wHnErXyTBJ1jGcL89s8DRbNLd_t.jpg"

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

    body.style.backgroundImage = `url(randomHouseImg)`;
    this.updateMiles();
    this.comparePizzas();


  }
  refuel(){
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
      alert ("You lost!");
      restart();
    }
    //call back to modal?

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
      alert ("You lost!");
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
    if (newWarningTotal <=4){
    alert ("You delivered the wrong pizza. You received a warning from your boss.");
    }
    if (newWarningTotal >= 5) {
      alert("This is your fifth and final warning. You delivered the wrong pizza too many times. You're fired.");
      restart();
      //then call and go back to the beginning/modal
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
//start game

const toggleModal = () => modal.classList.toggle('open');

const startGame = () => {
  toggleModal();

} // what does this do?

const openGame = () => {
  modal.classList.remove('open');
  controls.classList.add('open');
  stats.classList.add('open');
  imageContainer.classList.add('open');
  changingBackground.setAttribute("src", backgroundImg.pizzaShopImg)
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
  }



//EVENT LISTENERS

window.onload = () => {
  startGame();
}

startButton.addEventListener('click', () => {
  openGame();
})

deliverButton.addEventListener('click', () => {
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
