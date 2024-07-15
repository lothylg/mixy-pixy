const button= document.querySelector('submitBtn')
const alc= document.getElementById('alcoholTypes')
const ingredient= document.getElementById('ingredientsOnHand')

const submitObject= { 
  alc: alc.value,
  ingredient: ingredient.value
  } 
  console.log(submitObject)

button.addEventListener('submit', event)
  event.preventDefault();
  window.location.href =`./secondpage.html`






function saveToLocalStorage(){ 
    localStorage.setItem(alc, ingredient)
    console.log(alc, ingredient)
}

function getFromLocalStorage(){ //example
    localStorage.getItem(drinks)
    console.log(drinks)
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
