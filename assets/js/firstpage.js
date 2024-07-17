const button= document.getElementById('submitBtn');
const formInputEl= document.getElementById('drinkForm')


button.addEventListener('submit', handleFetchOnSubmit()) 
button.addEventListener('submit', moveToResults()) 


function handleFetchOnSubmit(event){
  event.preventDefault()
  if(formInputEl.value===''){
    alert ('Please enter your ingredients!')
  } else {getDataFromApi()}
}

function moveToResults(event){
  event.preventDefault();
  window.href.location=`secondpage.html`
}



// let ingredientsAutoComp = [
//   'Light rum',
//   'Applejack',
//   'Gin',
//   'Dark Rum',
//   'Sweet Vermouth',
//   'Strawberry schnapps',
//   'Scotch',
//   'Apricot brandy',
//   'Triple sec',
//   'Southern Comfort',
//   'Orange Bitters',
//   'Brandy',
//   'Lemon vodka',
//   'Blended Whisky',
//   'Dry Vermouth',
//   'Amaretto',
//   'Tea',
//   'Champagne',
//   'Coffee liqueur',
//   'Bourbon',
//   'Tequila',
//   'Vodka',
//   'Anejo rum',
//   'Bitters',
//   'Sugar',
//   'Kahlua',
//   'Watermelon',
//   'Lime juice',
//   'Irish Whisky',
//   'Apple brandy',
//   'Carbonated water',
//   'Cherry Brandy',
//   'Creme de cacao',
//   'Grenadine',
//   'Port',
//   'Coffee Brandy',
//   'Red Wine',
//   'Rum',
//   'Grapefruit juice',
//   'Ricard',
//   'Sherry',
//   'Cognac',
//   'Sloe gin',
//   'Apple Juice',
//   'Pineapple juice',
//   'Lemon juice',
//   'Sugar syrup',
//   'Milk',
//   'Strawberries',
//   'Chocolate syrup',
//   'Yoghurt',
// ];


