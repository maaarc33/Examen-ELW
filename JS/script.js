// const OP_API_BASEURL = 'http://localhost:3000/api/onepiece';
// async function getallOPCHARACTERS() {
//     const response = await fetch(`${OP_API_BASEURL}/characters`);
//     const data = await response.json();
//     return data;
// }   
// async function getOPimageByUrl(OPUrl) {
//     const response = await fetch(OPUrl);

//     if (!response.ok) {
//         throw new Error('Image not found');
//     }

//     const data = await response.json();
//     return data;
// }


const limitPerPage=10;
const apiUrl="http://localhost:3000/api/onepiece/characters";

const getUsers = async function(pageNo = 1) {

let actualUrl=apiUrl + `?page=${pageNo}&limit=${limitPerPage}`;
var apiResults=await fetch(actualUrl)
.then(resp=>{
return resp.json();
});

return apiResults;

}

const getEntireUserList = async function(pageNo = 1) {
  const results = await getUsers(pageNo);
  console.log("Retreiving data from API for page : " + pageNo);
//   if (results.length>0) {
//     return results.concat(await getEntireUserList(pageNo+1));
//   } else {
//     return results;
//   }
};


(async ()=>{

    const entireList=await getEntireUserList();
    console.log(entireList);

})();

window.onload = async () => {
    Charlist=getEntireUserList();
    //const OPCharactersResponse = await getallOPCHARACTERS();
    //const OPCharacters = OPCharactersResponse.results;
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);
   

 
       //const OPimage = await getOPimageByUrl(OPreference.image_url);
        

        const OPelement = document.createElement('div');

       const CharacterName = document.createElement('h2');
       CharacterName.textContent = Charlist.name;
        

        

        //  const OPsprite = document.createElement('img');
        //  OPsprite.src = OPCharactersResponse.image_url;
        //Pokemonsprite.alt = pokemon.name;
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
        // OPelement.appendChild(OPBounty);
        //OPelement.appendChild(AddPokemonButton);

        mainElement.appendChild(OPelement);
       
    }
