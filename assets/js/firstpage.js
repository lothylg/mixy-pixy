const button= document.querySelector('modalBtn');
const modalSubmit= document.querySelector('submitBtn');
const alcoholType = document.querySelector(`#alcoholType`);
const drinkInputEl = document.querySelector(`#drink-input`);
const ingredientsList = document.getElementById(`#ingredients-on-hand`);
const submitEl = document.querySelector('#submit');
const buttonEl = document.querySelector(`#button`);
const cocktailOutput = document.querySelector(`#cocktail`);

function readDrinkFromStorage(){
  let drink = JSON.parse(localStorage.getItem(`drink`));

  if (!drink){
    drink = [];
  }

  return drink;
}


const submitObject= { 
  alc: alc.value,
  ingredient: ingredient.value //currently being read as null
  } 
  console.log(submitObject)

//const stringifyObj= JSON.stringify{submitObject}; 
//^This is currently throwing an error and I have no idea, syntax looks correct



button.addEventListener('submit', function (event){
  //need submit button on form page
  event.preventDefault();



  window.location.href =`./secondpage.html`
})





function saveToLocalStorage(){ 
    localStorage.setItem(alc, ingredient)
    console.log(alc, ingredient)
}

function getFromLocalStorage(){ //example
    localStorage.getItem(drinks)


modalSubmit.addEventListner('submit', function(){
    window.location.href = `./secondpage.html`;
    
})

function saveDrinkToLocalStorage(){
    localStorage.setItem(`drink`, JSON.stringify(drink));
    console.log(drink)
}

function getDrinkFromLocalStorage(){
    localStorage.getItem(`drink`, JSON.stringify(drink));
    console.log(drink)

}

$(function () {
    const ingredientsList = [
      'Light rum',
      'Applejack',
      'Gin',
      'Dark Rum',
      'Sweet Vermouth',
      'Strawberry schnapps',
      'Scotch',
      'Apricot brandy',
      'Triple sec',
      'Southern Comfort',
      'Orange Bitters',
      'Brandy',
      'Lemon vodka',
      'Blended Whisky',
      'Dry Vermouth',
      'Amaretto',
      'Tea',
      'Champagne',
      'Coffee liqueur',
      'Bourbon',
      'Tequila',
      'Vodka',
      'Anejo rum',
      'Bitters',
      'Sugar',
      'Kahlua',
      'Watermelon',
      'Lime juice',
      'Irish Whisky',
      'Apple brandy',
      'Carbonated water',
      'Cherry Brandy',
      'Creme de cacao',
      'Grenadine',
      'Port',
      'Coffee Brandy',
      'Red Wine',
      'Rum',
      'Grapefruit juice',
      'Ricard',
      'Sherry',
      'Cognac',
      'Sloe gin',
      'Apple Juice',
      'Pineapple juice',
      'Lemon juice',
      'Sugar syrup',
      'Milk',
      'Strawberries',
      'Chocolate syrup',
      'Yoghurt',
    ];
    $('#ingredientsList').autocomplete({
      source: ingredientsList,
    });
  });

  // have to create some input here in local storage. need to pull drinkName, however it's stored in the API (what is the name of the cocktail)
function handleDrinkInputSubmit(event) {
  event.preventDefault();

  const alcoholType = alcoholType.val();
  const ingredientsOnHand = ingredientsList.val();

  const newDrink = {
    id: crypto.randomUUID(),
    drink: drinkName,
    description: drinkDescription,
  };

  const drink = readDrinkFromStorage ();
  drink.push(newDrink);

  // save updated drink array to localStorage
  saveDrinkToStorage(drink);

  // print drink data back to the screen (should be on secondpage.html)
  printDrinkData();

  // clear the form inputs
  alcoholType.val(``);
  ingredientsOnHand.val=(``);
}

function drinkResults(event){
  event.preventDefault();
  console.log(event);

  if (alcoholType === ingredientsList) {
    return drink; 
    // do i reference sending this to the second page on the html?
      window.location.href = `./secondpage.html`;
  }
}

$(document).ready(function () {

  // Add event listeners
  $("#addTaskForm").on("submit", handleAddTask);
  $(document).on("click", ".delete-task", handleDeleteTask);

  // Initialize the modal form (example)
  $("#task-list").on("shown.bs.modal", function () {
    $("#taskTitle").trigger("focus");
  });
});