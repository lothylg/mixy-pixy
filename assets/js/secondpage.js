//WE STILL NEED TO ADD IN BOOTSTRAP
// const cardDeck = $('<div>').addClass ('card-deck')



//arg needed below for api data
function createDrinkCards(){
    const cardDeck = $('<div>').addClass ('card-deck') //might need to set this to global, and then append inside of a separate later function
    const drinkCard = $('<div>').addClass ('card')
    const cardImg = $('<img>').addClass('card-img-top')//Need to figure out how to add source
    const cardBody = $('<div>').addClass ('card-body')
    const cardTitle= $('<h5>').addClass ('card-title')
    const cardDesc= $('<p>').addClass ('card-text')

    //Gather the elements created above and appends them to a set card 

    cardBody.append(cardTitle, cardDesc);
    drinkCard.append(cardImg, cardBody)

}