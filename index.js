

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        if(!response.ok){
            throw new Error("Could not fetch resource");

        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokename = data.name;
        const poketype = data.types[0].type.name;

        document.getElementById("pokename").textContent = pokename;
        document.getElementById("poketype").textContent = poketype;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display ="block";



    }
    catch(error){
        console.error(error)
    }
}