const button= document.querySelector('modalBtn')
const modalSubmit= document.querySelector('submitBtn')

button.addEventListener('click',function(){
    preventDefault();

})

modalSubmit.addEventListner('submit', function(){
    window.location.href = `./secondpage.html`
})

function saveToLocalStorage(){
    
}