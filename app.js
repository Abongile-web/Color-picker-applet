const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const background = document.querySelector('body'); 
const colortext = document.querySelector('.color');

//change background color to random color from array when btn is clicked 
btn.addEventListener('click', ()=> {

    let picked = colorPick();

    background.style.backgroundColor = colors[picked];
    colortext.innerHTML = colors[picked];

})

//select a random color from the array 
function colorPick(){
    return Math.floor(Math.random() * colors.length);
}


//Add color to list when btn 2 is clicked 
const addBtn = document.querySelector('#AddBtn');

addBtn.addEventListener('click', ()=> {
    const usercolor = document.querySelector('#mycolor').value;

    //if usercolor is already in list, do not proceed and warn user
    let isInArray = colors.includes(usercolor);

    if (isInArray === true) {
        alert('This color is already in the list. Choose now color.')
        return;
    }


    //if usercolor is an invalid color, do not proceed and warn user 

    console.log();
    console.log(colors);

    colors.push(usercolor);

    background.style.backgroundColor = colors[colors.length - 1];
    colortext.innerHTML = colors[colors.length - 1];
})