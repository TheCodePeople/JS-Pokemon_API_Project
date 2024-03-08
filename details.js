let container = document.getElementById("text-container");
// container.classList.add("text-container");
let namePok = document.getElementById("pok-name");
// namePok.classList.add("pok-name");
let types = document.getElementById("types");
let abilities = document.getElementById("abilities");
let stats = document.getElementById("stats");
let height = document.getElementById("height");
let imgPok = document.getElementById("img-pok");

async function getPokemonDetails(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

async function displayPokemonDetails() {
  let searchParams = new URLSearchParams(window.location.search);
  let name = searchParams.get("name");

  let data = await getPokemonDetails(name);
  console.log(data);
  //   namePok.classList.add("pok-name");
  namePok.textContent = data.name;

  imgPok.src = data.sprites.front_default;

  data.types.forEach((type, index) => {
    if (index == 0) {
      types.textContent += type.type.name;
    } else {
      types.textContent += " - " + type.type.name;
    }
  });

  data.abilities.forEach((ability, index) => {
    if (index == 0) {
      abilities.textContent += ability.ability.name;
    } else {
      abilities.textContent += " - " + ability.ability.name;
    }
  });

  data.stats.forEach((stat, index) => {
    if (index == 0) {
      stats.textContent += stat.base_stat;
    } else {
      stats.textContent += " - " + stat.base_stat;
    }
  });

  height.textContent += " " + data.height;
}

displayPokemonDetails();
