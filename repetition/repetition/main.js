//element reference
const userInputNumberOfTiles = document.getElementById('numberOfTiles');
const tilesList = [];
const userTilesList = [];
const cardContainer = document.getElementById('cardContainer');


//functions
async function getRandomDogObject(){
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    if (!res.ok) throw new Error('Fel vid hämtning av bild', res.status);
    const data = await res.json();
    return data[0].url
}

async function fillTilesList(a) {
    for (let i=0; i< a; i++){
        tilesList.push( await getRandomDogObject());
    }  
}

async function createCard(url){
    const parent= document.getElementById('cardContainer');
    const card = document.createElement('img');
    card.setAttribute('src', url);
    card.setAttribute('height', '200px');
    parent.appendChild(card);
}

//eventlistners
fillTilesList(5);

userInputNumberOfTiles.addEventListener('change', () => {
    const numberOfTiles = parseInt(userInputNumberOfTiles.value)/2;
    if (userTilesList.length > 1){
        while (userTilesList.length > 0){userTilesList.pop()}
    }

    for (let i=0; i<numberOfTiles; i++) {
        userTilesList.push(tilesList[i]);
    }

    if (cardContainer.querySelectorAll('img').length === 0){
        userTilesList.forEach( e => createCard(e));
    } else {
        while (cardContainer.querySelectorAll('img').length > 0) {
            let child = cardContainer.querySelector('img');
            cardContainer.removeChild(child);
        }
        userTilesList.forEach( e => createCard(e));
    }
    
})