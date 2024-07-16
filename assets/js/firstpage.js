const button= document.querySelector('modalBtn');
const modalSubmit= document.querySelector('submitBtn');
const alc = document.getElementById(`#alcoholType`);
const drinkInputEl = document.querySelector(`#drink-input`);
const ingredient = document.getElementById(`#ingredients-on-hand`);
const submitEl = document.querySelector('#submit');
const buttonEl = document.querySelector(`#button`);
const cocktail = document.querySelector(`#cocktail`);

let drink = localStorage.getItem(`drink`);

cocktail.textContent = drink;

// unsure if we have the right stuff entered in to read it from local storage? Might have to make this wholistic for the entire cocktail output? unsure.
function readIngredientFromStorage(){
  let ingredient = JSON.parse(localStorage.getItem(`#ingredients-on-hand`));


  if (!ingredient){
    ingredient = [];
  }

  return ingredient;
};
console.log(readIngredientFromStorage);

function readAlcFromStorage(){
  let alc = JSON.parse(localStorage.getItem(`alcoholType`));


  if (!alc){
    alc = [];
  }

  return alc;
};
console.log(readAlcFromStorage);

$(document).ready(function(){
  $('#secIng').autocomplete({
    source: ingredientsAutoComp,
  },{});
let ingredientsAutoComp = [
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
  return drink;
});

// changed 101 and 102
function submitData() {
  const alc = document.getElementById('alcoholType');
  const ingredient = document.getElementById('ingredients-on-hand');

  const submitObject = { 
    alc: alc.value,
    ingredient: ingredient.value
  };

  console.log(submitObject);

  const stringifyObj = JSON.stringify(submitObject);
  console.log(stringifyObj);


button.addEventListener('submit', function (event){
  event.preventDefault();
  if (alc === ingredient) {
    return cocktail; 
  };
// added these localstorage things below
  localStorage.setItem(`alc`, alc);
  localStorage.setItem(`ingredient`, ingredient);
  // renderLastRegistered();

  // window.location.href =`./secondpage.html`
})
};
console.log(submitData);





function saveToLocalStorage(){ 
    localStorage.setItem(alc, ingredient)
    console.log(alc, ingredient)
}

function getFromLocalStorage(){ //example
    localStorage.getItem(cocktail)


// modalSubmit.addEventListner('submit', function(){
//     window.location.href = `./secondpage.html`;
    
// })
// };

function saveCocktailToLocalStorage(){
    localStorage.setItem(`#cocktail`, JSON.stringify(cocktail));
    console.log(cocktail)
}

function getCocktailFromLocalStorage(){
    localStorage.getItem(`#cocktail`, JSON.stringify(cocktail));
    console.log(cocktail)

}

$(function () {
    const ingredient = [
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
    $('#ingredients-on-hand').autocomplete({
      source: ingredient,
    });
  });

  // have to create some input here in local storage. need to pull drinkName, however it's stored in the API (what is the name of the cocktail)
function handleDrinkInputSubmit(event) {
  event.preventDefault();

  const alc = alc.val();
  const ingredient = ingredient.val();

  const newDrink = {
    id: crypto.randomUUID(),
    drink: drinkName,
    description: drinkDescription,
  };

  const drink = readCocktailFromStorage ();
  drink.push(newDrink);

  // save updated drink array to localStorage
  saveCocktailToStorage(drink);

  // print drink data back to the screen (should be on secondpage.html)
  printCocktailData();

  // clear the form inputs
  alc.val(``);
  ingredient.val(``);
};
console.log(newDrink);

function cocktailResults(event){
  event.preventDefault();
  console.log(event);

  if (alc === ingredient) {
    return cocktail; 
    // do i reference sending this to the second page on the html?
      // window.location.href = `./secondpage.html`;
  }
};

};