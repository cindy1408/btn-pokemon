
const getPokemonDetails = async () => {
    let id = document.getElementById('userInput').value;

    const responseObject = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    // console.log(responseObject);

    const extractJson = await responseObject.json();
    // console.log(extractJson);

    const {name, base_happiness, capture_rate, color} = extractJson;
    // console.log(`${name}, ${base_happiness}, ${capture_rate}, ${color.name}`)

    document.getElementById('result').innerHTML = 
    `Your favorite number corrosponds to the pokemon <b>${name}</b>! <br>
    It has a <b> base happiness of: ${base_happiness} </b>, 
    a <b> capture rate of: ${capture_rate}</b> and the favorite color 
    is <b>${color.name}</b>!`;
}


