const OP_API_BASEURL = 'http://localhost:3000/api/onepiece';
async function getallOPCHARACTERS() {
    const response = await fetch(`${OP_API_BASEURL}/characters`);
    const data = await response.json();
    return data;
}   
// async function getOPimageByUrl(OPUrl) {
//     const response = await fetch(OPUrl);

//     if (!response.ok) {
//         throw new Error('Image not found');
//     }

//     const data = await response.json();
//     return data;
// }
window.onload = async () => {
    const OPCharactersResponse = await getallOPCHARACTERS();
    const OPCharacters = OPCharactersResponse.results;
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);
   

    // while (true) {
       // const OPimage = await getOPimageByUrl(OPCharacters.image_url);
        

        const OPelement = document.createElement('div');

        const CharacterName = document.createElement('h2');
        CharacterName.textContent = OPCharacters.name.map(typeInfo => typeInfo.type.name)
            .join(', ');;

        

        //  const OPsprite = document.createElement('img');
        //  OPsprite.src = OPimage;
        // //Pokemonsprite.alt = pokemon.name;
        // const OPBounty = document.createElement('p');
        // OPBounty.textContent='OPCharacters.bounty'
        // OPBounty.hidden=true;
        // if(OPBounty != null){
        //     OPBounty.hidden=false;
        // }

        // const AddOPButton = document.createElement('button');
        // AddPokemonButton.textContent = 'ADD POKEMON TO THE TEAM';
        // AddPokemonButton.hidden = true;

        // AddPokemonButton.addEventListener('click', () => {
        //     addPokemon(pokemon);
        // });

        // PokemonName.addEventListener('click', () => {
        //     Pokemontype.hidden = !Pokemontype.hidden;
        //     Pokemonsprite.hidden = !Pokemonsprite.hidden;
        //     AddPokemonButton.hidden = !AddPokemonButton.hidden;
        // });

        OPelement.appendChild(CharacterName);
       // OPelement.appendChild(OPsprite);
        //OPelement.appendChild(OPBounty);
        //OPelement.appendChild(AddPokemonButton);

        mainElement.appendChild(OPelement);
       
    }
//}