const modalButton= document.querySelector('button')
const alcInput= document.getElementById('search-input') //self example, needs to be changed later
const ingedientInput= document.getElementById('form-input')//self example, needs to be changed later

// this event listner will be for the modal

// button.addEventListener('click',function (event){
//     event.preventDefault();


    //object for input data
    const submitObject= { 
    ing: searchInput.value,
    alc: formatInput.value, 
    } //ing and alc are current placeholders, will need to be changed to calues from api url
    console.log(submitObject)



// })


function paramsforFetch(needsarg){

    const urlWithParams =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${submitObject}` //need to figure out what to put into here
    console.log(urlWithParams)
    makeFetch(urlWithParams)
}

function makeFetch(urlWithParams){
    fetch(urlWithParams)
}

parseDrinkData();