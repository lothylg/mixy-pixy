


// Here is an example from the api. You can use this for testing the parsing function below.


// const testDrinkData = {
//     idDrink: "11007",
//     strDrink: "Margarita",
//     strDrinkAlternate: null,
//     strTags: "IBA,ContemporaryClassic",
//     strVideo: null,
//     strCategory: "Ordinary Drink",
//     strIBA: "Contemporary Classics",
//     strAlcoholic: "Alcoholic",
//     strGlass: "Cocktail glass",
//     strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
//     strInstructionsES: null,
//     strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
//     strInstructionsFR: null,
//     strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
//     "strInstructionsZH-HANS": null,
//     "strInstructionsZH-HANT": null,
//     strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
//     strIngredient1: "Tequila",
//     strIngredient2: "Triple sec",
//     strIngredient3: "Lime juice",
//     strIngredient4: "Salt",
//     strIngredient5: null,
//     strIngredient6: null,
//     strIngredient7: null,
//     strIngredient8: null,
//     strIngredient9: null,
//     strIngredient10: null,
//     strIngredient11: null,
//     strIngredient12: null,
//     strIngredient13: null,
//     strIngredient14: null,
//     strIngredient15: null,
//     strMeasure1: "1 1/2 oz ",
//     strMeasure2: "1/2 oz ",
//     strMeasure3: "1 oz ",
//     strMeasure4: null,
//     strMeasure5: null,
//     strMeasure6: null,
//     strMeasure7: null,
//     strMeasure8: null,
//     strMeasure9: null,
//     strMeasure10: null,
//     strMeasure11: null,
//     strMeasure12: null,
//     strMeasure13: null,
//     strMeasure14: null,
//     strMeasure15: null,
//     strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
//     strImageAttribution: "Cocktailmarler",
//     strCreativeCommonsConfirmed: "Yes",
//     dateModified: "2015-08-18 14:42:59"
//   };


const alldrinks = []; 


async function getDataFromApi() {
  try {
    const resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const data = await resp.json();

    if (data.drinks) {
      data.drinks.forEach(currentDrink => {
        const newDrinkObj = {
          drink: currentDrink.strDrink,
          alcohol: currentDrink.strIngredient1,
          ingredients: parseDrinkData(currentDrink),
          instructions: currentDrink.strInstructions,
          image: currentDrink.strDrinkThumb,
        };
        alldrinks.push(newDrinkObj);
      });


      populateAlcoholDropdown();

      // Store the array of drinks in localStorage
      localStorage.setItem("alldrinks", JSON.stringify(alldrinks));

      // Retrieve the stored drinks from localStorage
      const storedDrinks = JSON.parse(localStorage.getItem("alldrinks"));
      console.log(storedDrinks);

      // Example usage of findDrink function
      const drinkINeed = findDrink(storedDrinks, "A1");
      console.log(drinkINeed);

      // Example usage of searchByAlcoholAndIngredients function
      const filteredDrinks = searchByAlcoholAndIngredients("Gin", ["Grenadine"]);
      localStorage.setItem("filteredDrinks", JSON.stringify(filteredDrinks));
      console.log(filteredDrinks);


    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

function parseDrinkData(drinkObj) {
  let mixdata = [];
  Object.keys(drinkObj).forEach(function (key) {
    let ingredientData = { name: "", measure: "" };
    if (key.includes("strIngredient") && drinkObj[key] !== null) {
      ingredientData.name = drinkObj[key];
      const ingredientNumber = key.split("strIngredient")[1];
      const measureKeyName = `strMeasure${ingredientNumber}`;
      ingredientData.measure = drinkObj[measureKeyName] || "As much as you like!";
      mixdata.push(ingredientData);
    }
  });
  return mixdata;
}


function populateAlcoholDropdown() {
  const alcoholDropdown = document.getElementById("alcoholDropdown");
  const alcoholSet = new Set(alldrinks.map(drink => drink.alcohol));
  
  alcoholSet.forEach(alcohol => {
    const option = document.createElement("option");
    option.value = alcohol;
    option.textContent = alcohol;
    alcoholDropdown.appendChild(option);
  });

  alcoholDropdown.addEventListener("change", populateIngredientDropdown);
}

function populateIngredientDropdown() {
  const alcoholDropdown = document.getElementById("alcoholDropdown");
  const selectedAlcohol = alcoholDropdown.value;
  const ingredientDropdown = document.getElementById("ingredientDropdown");
  ingredientDropdown.innerHTML = "";

  const drinksWithSelectedAlcohol = alldrinks.filter(drink => drink.alcohol === selectedAlcohol);
  const ingredientSet = new Set(drinksWithSelectedAlcohol.flatMap(drink => drink.ingredients.map(ingredient => ingredient.name)));

  ingredientSet.forEach(ingredient => {
    const option = document.createElement("option");
    option.value = ingredient;
    option.textContent = ingredient;
    ingredientDropdown.appendChild(option);
  });
}

function searchByAlcoholAndIngredients(alcoholType, ingredientName) {



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

// search by alcohol type + ingredients
function searchByAlcoholAndIngredients(alcoholType, ingredientNames) {

  const filteredDrinks = alldrinks.filter(drink => {
    const hasAlcohol = drink.alcohol === alcoholType;
    const hasIngredient = drink.ingredients.some(ingredient => ingredient.name === ingredientName);
    return hasAlcohol && hasIngredient;
  });

  localStorage.setItem("filteredDrinks", JSON.stringify(filteredDrinks));
  displayFilteredDrinks(filteredDrinks);
}

function displayFilteredDrinks(filteredDrinks) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  filteredDrinks.forEach(drink => {
    const drinkDiv = document.createElement("div");
    drinkDiv.innerHTML = `
      <h3>${drink.drink}</h3>
      <p>Alcohol: ${drink.alcohol}</p>
      <p>Ingredients: ${drink.ingredients.map(ingredient => `${ingredient.name} (${ingredient.measure})`).join(", ")}</p>
      <p>Instructions: ${drink.instructions}</p>
      <img src="${drink.image}" alt="${drink.drink}">
    `;
    resultsDiv.appendChild(drinkDiv);
  });
}

document.getElementById("drinkForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const alcoholDropdown = document.getElementById("alcoholDropdown");
  const ingredientDropdown = document.getElementById("ingredientDropdown");
  const selectedAlcohol = alcoholDropdown.value;
  const selectedIngredient = ingredientDropdown.value;

  searchByAlcoholAndIngredients(selectedAlcohol, selectedIngredient);
});

// Call the function to fetch data from API
getDataFromApi();
}
