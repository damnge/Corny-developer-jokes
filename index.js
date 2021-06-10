//constant variables

const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;


// event listener that works on click on the punchline btn to get a punchline of the joke
punchlineBtn.addEventListener('click', getPunchline);

// Add an event listener for the new joke button. When clicked it should call the getJoke function 
newJokeBtn.addEventListener('click', getJoke);

// function that adds the punchline to the website it also hide punchline btn and show new joke btn
function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}


// asyn function that get the jokes from API
async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    
    // Get the setup from the joke and insert it into the setupDiv element
    setupDiv.innerHTML = joke[0].setup;
    
    // Create a global variable called punchline which will store the current punchline and will be updated with each new joke
    // Assign the current jokes punchline to the punchline variable.
    punchline = joke[0].punchline;
    
    // Clear the punchline div and remove the "bubble" class from the punchline div
    punchlineDiv.innerHTML = "";
    punchlineDiv.classList.remove('bubble');
    
    // Hide the new joke btn and show get punchline btn
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}
// invoke function
getJoke();