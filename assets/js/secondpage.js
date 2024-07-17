
//This function needs to be called once having loaded the second page, or if the search has been entered onto the 
function cardPrimary(drinkObj){
    const cards = $('<div>').addClass ('card')
    const cardBody = $('<div>').addClass ('card-body')
    const cardImg = $('<img src = >').addClass('card-img-top')
    const cardDrinkName= $('<p>').addClass('cardTitle').text(drinkObj.[i])
    const cardDrinkMix= $('<p>').addClass('card-text').text(drinkObj.[i])

    cardBody.append(cardDrinkName, modalMoreInfoBtn)
    cards.append(cardImg, cardBody)
    return cards;
}

function readProjectsFromStorage() {
    let drinkData = JSON.parse(localStorage.getItem('drinkObj'));
    return drinkData;
}




//to do: once json has been parsed, append the information to the elements above 
//card title will be the drink name from the API (strDrink)
// card IMG will be picture from the API (strDrinkThumb)
// cardDesc will be the how to (strInstructions)

// const cardDeck = $('<div>').addClass ('card-deck')
const dNameInput = $('#drinkName');
const triedInput = $('#dateTried');
const thoughtsInput = $('#reviewDetails');
const reviewContainer = $('#reviewContainer');
const reviewSubmitBtn = $('#reviewBtn')
let existingReviews = localStorage.getItem('drinkThoughts') || [];
console.log(existingReviews);

function readReviewsFromStorage(){
    if(existingReviews) {
       const reviews = JSON.parse(localStorage.getItem('drinkThoughts'));
       console.log(reviews);
       return reviews;
    }
    return [];
}

function populateReviews(){
    const reviews = readReviewsFromStorage();

    for (let review of reviews){
        reviewContainer.append(createReviewCard(review));
    }
}

function createReviewCard(review){
    const reviewCard = $('<div>')
        .addClass('card review-card my-3');
    const reviewHeader = $('<div>').addClass('card-header h4').text(review.drinkName); 
    const cardDescription = $('<p>').addClass('card-text').text(review.review);
    const cardDueDate = $('<p>').addClass('card-text').text(review.dateTried);
    const cardDeleteBtn = $('<button>')
        .addClass('btn bg-info btn-delete-project delete')
        .text('Delete')
        .attr('data-review-id', review.reviewId)
    cardDeleteBtn.on('click', handleDeleteReview);
}
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

    const reviews = readReviewsFromStorage();
;
    existingReviews.push(newReview);

    saveReviewsToStorage()

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

reviewSubmitBtn.on('click', addReview);




