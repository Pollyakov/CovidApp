function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let container = document.querySelector(".container");


generateNumbers = (n) => {
    let numbers = [];
    for (let i = 0; i < n+4; i++) {
       let random_number =  getRandomInt(n/2);
       if (!numbers.includes(random_number)){
           numbers.push(random_number);
           numbers.push(random_number);
        };
    };
    console.log("random numbers: ", numbers);
    return numbers;
};
//creating a state object
let state = {
    "corrects": 0,
    "wrongs": 0,
    "previousClick": "",
};
//4. function for generating cards in a dom throw js
//each card will get data-attribute with a number 
//from an array that will be changed to be the 
//text value of the card after the click  
const createCard = (num)=> {

    let card =  document.createElement("div");
    card.classList.add("card");
    card.dataset.num = num;//how to make it in random order?
    card.addEventListener("click", (e) => flip(e));
    container.appendChild(card);
    
};
//for each num in array of random numbers
//this function will create a card:    
const generateCards = (array) => {
    array.forEach((num) => createCard(num));
};

const flip = (e) => {
    let target = e.target;//the div, where is a click
    target.style.backgroundColor= "white";
    target.innerHTML = target.dataset.num;
    //state.last_clicked = target;
    if(state.previousClick===target) {
        //remove eventListener from both-
        //they will not be clickable again
        target.removeEventListener("click", (e) => flip(e));
        state.previousClick.removeEventListener("click", (e) => flip(e)); 
        //update state
        state.corrects++;
       
    } else { //make background green with delay
        //target.style.backgroundColor = "seagreen";
        //update state counter
        state.wrongs++;

    }
 
}
generateCards(generateNumbers(12));


  


