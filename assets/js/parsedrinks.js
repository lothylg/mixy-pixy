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

// async function getRandomDrinkApi(){
//   try {
//       const randInfo = await fetch("www.thecocktaildb.com/api/json/v1/1/random.php");
//       const randDrinkData = await randInfo.json();
  
//   if (randDrinkData.drinks) {
//       const drinkObj = {
//           drink: strDrink,
//           alcohol: strAlcoholic,
//           glass: strGlass,
//           instructions: strInstructions,
//           ingredients: parseDrinkData(randDrinkData),
//           image: strDrinkThumb

//       }
//   } 
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }

//   console.log(randomDrinkObj)
// }

// getRandomDrinkApi();

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
  const filteredDrinks = alldrinks.filter(drink => {
    const hasAlcohol = drink.alcohol === alcoholType;
    const hasIngredient = drink.ingredients.some(ingredient => ingredient.name === ingredientName);
    return hasAlcohol && hasIngredient;
  });

  localStorage.setItem("filteredDrinks", JSON.stringify(filteredDrinks));
  displayFilteredDrinks(filteredDrinks);
}

function displayFilteredDrinks(filteredDrinks) {
  const resultsDiv = document.getElementById("resultsContainer");
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

