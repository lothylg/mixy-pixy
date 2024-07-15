const formEl = document.getElementById("alcohol-input")
const alcoholInput = document.getElementById("alcoholTypes")
const secIngInput = document.getElementById("secIng")
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


})

// const button= document.querySelector('modalBtn')
// const modalSubmit= document.querySelector('submitBtn')

// button.addEventListener('click',function(){
//     preventDefault();

// })

// modalSubmit.addEventListner('submit', function(){
//     window.location.href = `./secondpage.html`
// })

// function saveToLocalStorage(){ //example
//     localStorage.setItem(drinks)
//     console.log(drinks)
// }

// function getFromLocalStorage(){ //example
//     localStorage.getItem(drinks)
//     console.log(drinks)
// }
/*
const ingredientsAutoComp = [
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
]

function autocompleteMatch(input){
  if (input == ""){
    return[];
  }
  let reg = new RegExp(input)
  return ingredientsAutoComp.filter(function(term){
    if (term.match(reg)){
      return term;
    }
  })
};
function showResults(val){
  res = document.getElementById("ingredientsList");
  res.innerHTML="";
  let list = '';
  let terms = autocompleteMatch(val);
  for (i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
};
*/
