


// Here is an example from the api. You can use this for testing the parsing function below.

const testDrinkData = {
    idDrink: "11007",
    strDrink: "Margarita",
    strDrinkAlternate: null,
    strTags: "IBA,ContemporaryClassic",
    strVideo: null,
    strCategory: "Ordinary Drink",
    strIBA: "Contemporary Classics",
    strAlcoholic: "Alcoholic",
    strGlass: "Cocktail glass",
    strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    strInstructionsES: null,
    strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
    strInstructionsFR: null,
    strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: "1 1/2 oz ",
    strMeasure2: "1/2 oz ",
    strMeasure3: "1 oz ",
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    strImageAttribution: "Cocktailmarler",
    strCreativeCommonsConfirmed: "Yes",
    dateModified: "2015-08-18 14:42:59"
  };

  // store each drink individually: use array of ingredients
  const drinkToStore = {
    name: "",
    description: "",
    image: "",
    ingredients: []
  }

  localStorage.setItem("tequilacocktail", JSON.stringify(drinkToStore) )
  localStorage.getItem("tequilacocktail")
  
  const alldrinks = []
  localStorage.setItem("alldrinks", JSON.stringify("alldrinks") )
  localStorage.getItem("alldrinks")  // JSON.parse

  function findDrink(name){
    return alldrinks.find( function(drink)){
      return drink.name = name
    }
  }

  const drinkINeed = findDrink("tequila cocktail")


  // Function to parse drink data and return ingredients with their measures
function parseDrinkData(drinkObj) {
  let mixdata = [];
  // Loop over each of the object keys in the drink data
  Object.keys(drinkObj).forEach(function(key) {
    let ingredientData = { name: "", measure: "" };
    // If the key begins with "strIngredient" AND if it has a value other than null then we want to look at it
    if (key.includes("strIngredient") && drinkObj[key] !== null) {
      ingredientData.name = drinkObj[key];
      // Get the number associated with the ingredient so we get the associated measure
      const ingredientNumber = key.split("strIngredient")[1];
      const measureKeyName = `strMeasure${ingredientNumber}`;
      // Add the measure info for that ingredient, or an empty string if null
      ingredientData.measure = drinkObj[measureKeyName] || "";
      // Now add the ingredient data object to our array of mix data
      mixdata.push(ingredientData);
    }
  });
  return mixdata;
};

const test = parseDrinkData(testDrinkData);
console.log(test);

const drinkCollection = []

async function getDataFromApi(){
  const resp = await fetch("...")
  const data = await resp.json();
  // loop through all drinks that are returned
  for( let i=0; i< data.drinks.length; i++){
    const currentDrink = data.drinks[i]
    const newDrinkObj = {
      id: currentDrink.idDrink,
      category: currentDrink.strCategory,
      instructions: currentDrink.strInstructions,
      ingredients: parseDrinkData(currentDrink)
    }
    drinkCollection.push(newDrinkObj)
  }
}
  
  
  // // After you query the api, you will get back one or more drink objects. If you call this function and pass in 
  // // the drink object, you'll get back an array of all ingredients and the measure associated with each one.
  // function parseDrinkData(drinkObj){
  //   let mixdata = []
  //   // loop over each of the object keys in the drink data 
  //   Object.keys(drinkObj).forEach(function(key){
  //     let ingredientData = { name: "", measure: "" };
  //     // if the key begins with "strIngredient" AND if it has a value other than null then we want to look at it 
  //     if( key.includes("strIngredient") && drinkObj[key] !== null  ){
  //       ingredientData.name = drinkObj[key];
  //       // get the number associated with the ingredient so we get the associated measure
  //       const ingredientNumber = key.split("strIngredient")[1];
  //       const measureKeyName = `strMeasure${ingredientNumber}`
  //       // add the measure info for that ingredient
  //       ingredientData.measure = drinkObj[measureKeyName] || "";
  //       // now add the ingredient data object to our array of mix data
  //       mixdata.push(ingredientData);
  //     }
  //   })
  //   return mixdata
  // }
  
  // const test = parseDrinkData(testDrinkData);
  // console.log(test)



//   function drinkSelector(){
//      if(vodka){
//       api[vodka]

// const return vodka drinkSelector
//     }
//   }

//   function ingredientSelector(){
//     vodkaDrink.description
//     if vodkaDrink.ingredient has leaves
//     return ingredients
//   }