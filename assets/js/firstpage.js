const button= document.querySelector('submitBtn') //doesn't exsist yet
const alc= document.getElementById('alcoholTypes')
const ingredient= document.getElementById('ingredientsOnHand')

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
