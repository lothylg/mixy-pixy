//Global variables

const dNameInput = $('#drinkName');
const triedInput = $('#dateTried');
const thoughtsInput = $('#reviewDetails');
const reviewContainer = document.getElementById('reviewContainer');
const reviewSubmitBtn = document.getElementById('reviewBtn');
let existingReviews = localStorage.getItem('drinkThoughts') || [];


//Functions
//This function needs to be called once having loaded the second page, or if the search has been entered onto the 
function cardPrimary(newDrinkObj){
    //Initial card/ cards will pop up for the drinks that match your ingredients. 
    //Each of these cards will have an image of the drink at the top of the card(pulled from api, big syntax confusion)
    //Then it will have the drink name as a header (pull this from API)
    //Then it will have a 'more info' button 
    //Once the more info button has been displayed, modal will pop up with additional information about the drink
    // This will include the Drink name as a header, the full set of ingredients+measurements, and the instructions.
    //At the bottom of this modal, we will have a 'save drink/ add to cabinent' option. Could also do a review and submit within the modal
    //To do: Figure out how to append the info that we pull from api 
    const cards = $('<div>').addClass ('card')
    const cardBody = $('<div>').addClass ('card-body')
    const cardImg = $('<img src = >').addClass('card-img-top')//pull pic from api
    const cardDrinkName= $('<p>').addClass('cardTitle').text()//val to be pulled from api
    const modalMoreInfoBtn= $('<button>').addClass('modalBtn').text('More info')
    const modal= $('<div>').addClass('modal-fade')
    const modalHeader= $('<div>').addClass('modal-header').text()//to be pulled from api, drinkname
    const modalBody = $('<div>').addClass ('modal-body')
    const modalIng= $('<p>').text()//val to be pulled from api, all the ing+ mix data
    const modalInstructions= $('<p>').text()//val to be pulled from api, drink instructions
    const modalFooter=$('<div>').addClass('modal-footer')//append the two bottons to this.
    const modalSaveBtn= $('<button>').addClass('btn btn-primary').text('Save Drink')//might need to flip order with above line
    const modalCloseBtn= $('<button>').addClass('btn btn-secondary').text('Close')

    cardBody.append(cardDrinkName, modalMoreInfoBtn)
    cards.append(cardImg, cardBody)
    modal.append(modalHeader, modalBody)
    modalBody.append(modalIng, modalInstructions, modalFooter)
    modalFooter.append(modalSaveBtn, modalCloseBtn )
    

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

//Calls / event listeners
reviewSubmitBtn.addEventListener("click", addReview);





