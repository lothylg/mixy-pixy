


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
    return alldrinks.find(function(drink)){
      return drink.name = name

 
const alldrinks = []; 

async function getDataFromApi() {
  try {
    const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const data = await resp.json();

    // Ensure data.drinks is not null or undefined
    if (data.drinks) {
      // Loop through all drinks that are returned
      for (let i = 0; i < data.drinks.length; i++) {
        const currentDrink = data.drinks[i];
        const newDrinkObj = {
          drink: currentDrink.strDrink,
          alcohol: currentDrink.strIngredient1,
          instructions: currentDrink.strInstructions,
          ingredients: parseDrinkData(currentDrink),
          image: currentDrink.strDrinkThumb, // Use correct property for image
        };
        alldrinks.push(newDrinkObj); // Add the new drink object to the array
      }
      
      // Store the array of drinks in localStorage
      localStorage.setItem("alldrinks", JSON.stringify(alldrinks));
      
      // Retrieve the stored drinks from localStorage
      const storedDrinks = JSON.parse(localStorage.getItem("alldrinks"));
      console.log(storedDrinks);

      // Example usage of findDrink function
      const drinkINeed = findDrink(storedDrinks, "A1");
      console.log(drinkINeed);

    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

function findDrink(drinks, drinkName) {
  return drinks.find(function (drink) {
    return drink.drink === drinkName;
  });
}

// Function to parse drink data and return ingredients with their measures
function parseDrinkData(drinkObj) {
  let mixdata = [];
  // Loop over each of the object keys in the drink data
  Object.keys(drinkObj).forEach(function (key) {
    let ingredientData = { name: "", measure: "" };
    // If the key begins with "strIngredient" AND if it has a value other than null then we want to look at it
    if (key.includes("strIngredient") && drinkObj[key] !== null) {
      ingredientData.name = drinkObj[key];
      // Get the number associated with the ingredient so we get the associated measure
      const ingredientNumber = key.split("strIngredient")[1];
      const measureKeyName = `strMeasure${ingredientNumber}`;
      // Add the measure info for that ingredient, or "As much as you like!" if null
      ingredientData.measure = drinkObj[measureKeyName] || "As much as you like!";
      // Now add the ingredient data object to our array of mix data
      mixdata.push(ingredientData);
    }
  });
  return mixdata;
}

// Call the function to fetch data from API
getDataFromApi();





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

  // store each drink individually: use array of ingredients
  // const drinkToStore = {
  //   name: "",
  //   description: "",
  //   image: "",
  //   ingredients: []
  // }

  // localStorage.setItem("tequilacocktail", JSON.stringify(drinkToStore) )
  // localStorage.getItem("tequilacocktail")