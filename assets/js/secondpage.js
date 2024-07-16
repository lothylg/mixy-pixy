
// const cardDeck = $('<div>').addClass ('card-deck')





//arg needed below for api data
// function createDrinkCardInfo(){ //Probably needs an edit to structure
    
//     const drinkCard = $('<div>').addClass ('card')
//     // const cardImg = $('<img>').addClass('card-img-top')//Need to figure out how to add source
//     const cardBody = $('<div>').addClass ('card-body')
//     const cardTitle= $('<h5>').addClass ('card-title')
//     const cardDesc= $('<p>').addClass ('card-text')

//     //Gather the elements created above and appends them to a set card 

//     cardBody.append(cardTitle, cardDesc);
//     drinkCard.append(cardBody)


//     return drinkCard
// }

function cardPrimary(){
    const cards = $('<div>').addClass ('card')
    const cardBody = $('<div>').addClass ('card-body')
    const cardImg = $('<img>').addClass('card-img-top')
    const carkDrinkName= $('<h5>').addClass('cardTitle').text()//val to be pulled from api
    const cardModalBTN= $('<button>').addClass('modalBtn').text('More info')
    const modal= $('<div>').addClass('modal')
    






}


//to do: once json has been parsed, append the information to the elements above 
//card title will be the drink name from the API (strDrink)
// card IMG will be picture from the API (strDrinkThumb)
// cardDesc will be the how to (strInstructions)