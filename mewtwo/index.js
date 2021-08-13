// const fetch = require('node-fetch');

function clickMe() {
    alert("You've clicked me?");
}

const getPokemonDetails = (id) => {
    // document.addEventListener('search-btn', onchange())
    const fetchPokemons = fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    const searchResult = [];
    // fetchPokemons is [Object Promise]
    //log(fetchPokemons)
    fetchPokemons.then((data) => {
        // data is [Object Response]
        // console.log(data);
        // data.json() is [Object Promise]
        data.json().then((pokemonInfo) => {
            //JSON.stringify(pokemonInfo) shows data within the object.
            // pokemonInfo = JSON.stringify(pokemonInfo)
            // console.log(pokemonInfo.name)

            const { name, base_happiness, capture_rate } = pokemonInfo;
            searchResult.push(
                `The following id: ${id} is ${name} with a happiness rate of ${base_happiness} and a capture rate of ${capture_rate} and is the color ${pokemonInfo.color.name}`
            );
            console.log(name);
            console.log(searchResult[0]);
        })
        // This will only give an empty object
        //log(JSON.stringify(data))
        searchResult.map((pokemon) => {
            {pokemon}
        })
        // console.log(searchResult)
    })


    document.getElementById('button').onclick = function(){return getPokemonDetails(6)}
    const button = document.getElementById('result');
    result.innerHTML += searchResult[0]
    // button.innerHTML += (JSON && JSON.stringify ? JSON.stringify(getPokemonDetails(6)) : getPokemonDetails(6))
}


getPokemonDetails(8);
