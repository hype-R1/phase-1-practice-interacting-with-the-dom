// minus

const buttonMinus=document.querySelector('#minus')

buttonMinus.addEventListener('click',function(){
    const number = document.querySelector('#counter').textContent

    const uptadeNum = parseInt(number)-1
    
    document.querySelector('#counter').textContent=uptadeNum

})


//plus button
const buttonPlus=document.querySelector('#plus')

buttonPlus.addEventListener('click',function(){
    const number = document.querySelector('#counter').textContent

    const uptadeNum = parseInt(number)+1
    
    document.querySelector('#counter').textContent=uptadeNum

})


// counter 

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(function(){
   
        
        const number = document.querySelector('#counter').textContent
        const updateNum = parseInt(number)+1
        document.querySelector('#counter').textContent = updateNum

    },1000)
    

 
})

//form submit
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const value = e.target['comment-input'].value
    showNote(value)
})

function showNote(value){
    const p = document.createElement('p')
    p.innerText = value;
    form.appendChild(p)
}

const hartButton = document.querySelector("#heart")

// heart button

hartButton.addEventListener('click',function(){
    const number = document.querySelector('#counter').textContent
    const p=document.createElement('p')
    p.innerText= `${number} has been liked 1 time`
    const container=document.querySelector('ul')  
    container.appendChild(p)
})

 


