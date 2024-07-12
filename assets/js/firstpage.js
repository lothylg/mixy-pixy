const button= document.querySelector('modalBtn')
const modalSubmit= document.querySelector('submitBtn')

button.addEventListener('click',function(){
    preventDefault();

})

modalSubmit.addEventListner('submit', function(){
    window.location.href = `./secondpage.html`
})

function saveToLocalStorage(){ //example
    localStorage.setItem(drinks)
    console.log(drinks)
}

function getFromLocalStorage(){ //example
    localStorage.getItem(drinks)
    console.log(drinks)
}
