const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const background = document.querySelector('body'); 

btn.addEventListener('click', ()=>{

    let picked = colorPick();

    background.style.backgroundColor = colors[picked];
})

//select a random color from the array 
function colorPick(){
    return Math.floor(Math.random() * colors.length);
}