//Global variables

const dNameInput = $('#drinkName');
const triedInput = $('#dateTried');
const thoughtsInput = $('#reviewDetails');
const reviewContainer = document.getElementById('reviewContainer');
const reviewSubmitBtn = document.getElementById('reviewBtn');
let existingReviews = localStorage.getItem('drinkThoughts') || [];
const drinkCard= $('#results')
const resultsContainer= $('#resultsContainer')
const newDrinkBtn= $('#newDrinkBtn')

//Functions
//This function needs to be called once having loaded the second page, or if the search has been entered onto the 
function cardPrimary(){
    const drinkCard = readDrinkFromStorage();
    console.log(drinkCard)
    for ( let i=0; i< drinkCard.length; i++){
        const currCard = drinkCard[i]
        const cardBodyHtml = $("<div class='card-body'>")
        // cardBodyHtml.html(`
        //     <p>Hello</p>
        // `)   


        // const cardBody = $('<div>').addClass ('card-body')
        const cardImg = $('<img>').addClass('card-img-top').attr("src", currCard.image)//apend 
        const cardDrinkName= $('<p>').addClass('cardTitle').text(currCard.drink)//drink name
        const cardDrinkMix= $('<p>').addClass('card-text').text(currCard.ingredients)// append ingredients from this area
        const cardDrinkInstructions= $('<p>').addClass('card-text').text(currCard.instructions) //append drink info to ext area


        cardBodyHtml.append(cardImg, cardDrinkName, cardDrinkMix, cardDrinkInstructions)
        console.log(cardBodyHtml)
        resultsContainer.append(cardBodyHtml)
    }
    

}

function printIngredients(){
    let ingredientsList= readDrinkFromStorage()
    for ( let i=0; i< ingredients.length; i++){
        console.log(ingredientsList)
    }   return ingredientsList

}

function readDrinkFromStorage() { // come back later
    let drinkData = JSON.parse(localStorage.getItem('filteredDrinks'));
    return drinkData;
}

function clearFirstSearch(){
    $("#newDrinkBtn").click(function(){
        $("#results").empty();
      });
}

function newDrinkResults(){
    $("#newDrinkBtn").click(function(){
        $("#results").empty();
      })
}

//to do: once json has been parsed, append the information to the elements above 
//card title will be the drink name from the API (strDrink)
// card IMG will be picture from the API (strDrinkThumb)
// cardDesc will be the how to (strInstructions)
// const cardDeck = $('<div>').addClass ('card-deck')

/*Lothy todo: push reviews to local storage
create individual cards for the reviews
stylize the cards

*/

function readReviewsFromStorage(){
    if(existingReviews) {
       const reviews = JSON.parse(localStorage.getItem('drinkThoughts'));
       return reviews;
    }
    return [];
}

function populateReviews(){
    const existingReviews = localStorage.getItem('existingReviews');

    const reviews = JSON.parse(existingReviews);

    const cabinet = document.getElementById('reviewContainer');

    cabinet.innerHTML = "";
    for ( let i=0; i< reviews.length; i++){
        const h4Tag = document.createElement('h4');
        h4Tag.textContent = `Drink name: ${reviews[i].drinkName}`;
        const dateTried = document.createElement('p');
        dateTried.textContent = `Date tried: ${reviews[i].dateTried}`;
        const reviewContent = document.createElement('p');
        reviewContent.textContent = `Your thoughts: ${reviews[i].review}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete Review";
        deleteBtn.setAttribute = ("id", reviews[i].reviewId);

        reviewContainer.appendChild(h4Tag);
        reviewContainer.appendChild(dateTried);
        reviewContainer.appendChild(reviewContent);
        reviewContainer.appendChild(deleteBtn);

    }

    localStorage.setItem("existingReviews", JSON.stringify(reviews))
}

// function createReviewCard(review){
//     const reviewCard = $('<div>')
//         .addClass('card review-card my-3');
//     const reviewHeader = $('<div>').addClass('card-header h4').text(review.drinkName); 
//     const reviewContent = $('<p>').addClass('card-text').text(review.review);
//     const dateTried = $('<p>').addClass('card-text').text(review.dateTried);
//     const deleteBtn = $('<button>')
//         .addClass('btn bg-info btn-delete-project delete')
//         .text('Delete')
//         .attr('data-review-id', review.reviewId)
//     cardDeleteBtn.on('click', handleDeleteReview);

//     reviewCard.append(reviewHeader, reviewContent, dateTried, deleteBtn);
// }


function saveReviewsToStorage(){
    localStorage.setItem('existingReviews', JSON.stringify(existingReviews));
}
function handleDeleteReview(){
    const reviewId = $(this).attr('data-review-id')
    const reviews = readReviewsFromStorage();

    reviews.forEach((review) => {
        if(review.reviewId === reviewId)
            reviews.splice(reviews.indexOf(review), 1);
    })
}

function addReview(event){
    event.preventDefault(); 
    console.log("add")

    const existingReviews = localStorage.getItem('existingReviews');

    const reviews = existingReviews ? JSON.parse(existingReviews) : [];

    const cabinet = document.getElementById('reviewContainer');

    // ? Read user input from the form
    const name = dNameInput.val().trim();
    const content = thoughtsInput.val(); 
    const dateTried = triedInput.val(); 


    const newReview = {
        reviewId: crypto.randomUUID(),
        drinkName: name,
        dateTried: dateTried,
        review: content
    }

    reviews.push(newReview);
    localStorage.setItem('existingReviews', JSON.stringify(reviews))

    populateReviews();

    dNameInput.val('');
    triedInput.val('');
    triedInput.val('');

}





// //arg needed below for api data
// function createDrinkCards(){
//     const cardDeck = $('<div>').addClass ('card-deck') //might need to set this to global, and then append inside of a separate later function
//     const drinkCard = $('<div>').addClass ('card')
//     const cardImg = $('<img>').addClass('card-img-top')//Need to figure out how to add source
//     const cardBody = $('<div>').addClass ('card-body')
//     const cardTitle= $('<h5>').addClass ('card-title')
//     const cardDesc= $('<p>').addClass ('card-text')

//     //Gather the elements created above and appends them to a set card 

//     cardBody.append(cardTitle, cardDesc);
//     drinkCard.append(cardImg, cardBody)


//     return drinkCard
// }

cardPrimary();

//Calls / event listeners
reviewSubmitBtn.addEventListener("click", addReview);
$(document).ready(function() {
    populateReviews();
})





