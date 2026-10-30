const OP_API_BASEURL = 'http://localhost:3000/api/onepiece';
async function getallOPCHARACTERS() {
    const response = await fetch(`${OP_API_BASEURL}/characters?limit=10`);
    const data = await response.json();
    return data;
}   
window.onload = async () => {
    const OPCharactersResponse = await getallOPCHARACTERS();
    const OPCharacters = OPCharactersResponse.results;
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);
    const OPcounter=0;

     while (OPcounter<10) {
        

        const OPelement = document.createElement('div');

        const CharacterName = document.createElement('h2');
        CharacterName.textContent = `OPCharacters.name`;

        

        const OPsprite = document.createElement('img');
        OPsprite.src = OPCharacters.image_url;
        Pokemonsprite.alt = pokemon.name;
        const OPBounty = document.createElement('p');
        OPBounty.textContent='OPCharacters.bounty'
        OPBounty

        const AddOPButton = document.createElement('button');
        AddPokemonButton.textContent = 'ADD POKEMON TO THE TEAM';
        AddPokemonButton.hidden = true;

        AddPokemonButton.addEventListener('click', () => {
            addPokemon(pokemon);
        });

        PokemonName.addEventListener('click', () => {
            Pokemontype.hidden = !Pokemontype.hidden;
            Pokemonsprite.hidden = !Pokemonsprite.hidden;
            AddPokemonButton.hidden = !AddPokemonButton.hidden;
        });

        Pokemonelement.appendChild(PokemonName);
        Pokemonelement.appendChild(Pokemonsprite);
        Pokemonelement.appendChild(Pokemontype);
        Pokemonelement.appendChild(AddPokemonButton);

        mainElement.appendChild(Pokemonelement);
        OPcounter++;
    }
}