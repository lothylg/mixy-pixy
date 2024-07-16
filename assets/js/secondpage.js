




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
    const modalReview= $('<form>').text().attr('hidden')//Keep this hidden until a review drink button has been hit at the bottom finish this modal, might need to be in separate function
    // const modalReviewBtn= $('<button>').addClass('btn btn-primary').text('Leave a Review?')//when this is clicked, reveal an invisible form field for the review
    const modalCloseBtn= $('<button>').addClass('btn btn-secondary').text('Leave a Review?')//might need to flip order with above line

    cardBody.append(cardDrinkName, modalMoreInfoBtn)
    cards.append(cardImg, cardBody)
    modal.append(modalHeader, modalBody)
    modalBody.append(modalIng, modalInstructions, modalFooter)
    modalFooter.append(modalReviewBtn, modalCloseBtn )
    

}


//to do: once json has been parsed, append the information to the elements above 
//card title will be the drink name from the API (strDrink)
// card IMG will be picture from the API (strDrinkThumb)
// cardDesc will be the how to (strInstructions)