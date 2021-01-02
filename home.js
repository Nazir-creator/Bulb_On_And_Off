// Reference to our html Id's

const On = document.getElementById('On');
const offb = document.getElementById('off');


// Function to on bulb

function onLight()  {
    On.addEventListener('click', () => {
        imagePosition.innerHTML = '<img src="images/on.png"  >'
offLight();

})
}

onLight();



// Function to off bulb

function offLight()  {
    off.addEventListener('click', () => {
        imagePosition.innerHTML = '<img src="images/off.png">'
})

}


//  We called our off Offlight function inside our onLight function
//   because we want the bulb to be on to enable off bulb... 