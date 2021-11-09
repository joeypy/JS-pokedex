const poke_container = document.getElementById('poke-container')
const pokemon_count = 898
const colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fdf2bc',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
}

const main_type = Object.keys(colors)

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    createPokemonCard(data)
}   

const createPokemonCard = (pokemon) => {
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('pokemon')

    const id = pokemon.id.toString().padStart(3, '0')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const poke_type = pokemon.types.map( (type) => type.type.name)

    const type = main_type.find( type => poke_type.indexOf(type) > -1)
    console.log(type)
    const color = colors[type]

    pokemonElement.style.backgroundColor = color
    
    // https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png
    // Esta url se encuentra caida por eso se usò la otra
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `

    pokemonElement.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonElement)
}

fetchPokemons()