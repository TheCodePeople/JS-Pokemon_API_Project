let container = document.getElementById("card-container");

async function getPokemons() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    let data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error)
  }
}

async function displayPokemons() {
  let pokemons = await getPokemons();
  
  pokemons.forEach(async(poke) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardPic = document.createElement("div");
    cardPic.classList.add("cardpic");
    let cardImg = document.createElement("img");

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
    let data = await response.json();
    cardImg.src = data.sprites.front_default;

    let cardName = document.createElement("div");
    cardName.classList.add("cardname");
    cardName.textContent = poke.name;
    
    cardPic.appendChild(cardImg)
    card.appendChild(cardPic)
    card.appendChild(cardName);
    container.appendChild(card);
    card.addEventListener("click",()=>{
      window.location.href=`./details.html?name=${poke.name}`
    });
  });
}























// async function getSprite() {
//   let pokemons = await getPokemons();

//   pokemons.forEach(async (poke) => {
  
//     let cardPic = document.createElement("div");
//     cardPic.classList.add("cardpic");
//     let cardImg = document.createElement("img");
//     card.classList.add("card");
//     container.appendChild(card);
//     card.appendChild(cardPic);
//     cardPic.appendChild(cardImg);

//     let names = poke.name;
//     let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${names}`);
//     let data = await response.json();
//     cardImg.src = data.sprites.front_default;
//     console.log(data.sprites.front_default);
//   });
// }
// getSprite();
displayPokemons();

// async function getPokemonDetails(name) {
//   let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//   let data = await response.json();
//   return data;
// }

// async function displayPokemonDetails() {
//   let searchParams = new URLSearchParams(window.location.search);
//   let name = searchParams.get("name");
//   let data = await getPokemonDetails(name);
//   cardImg.src = data.sprites.front_default;
// }
// displayPokemonDetails();
