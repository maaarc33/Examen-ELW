const OP_API_BASEURL = 'https://onepieceapi.com/api';
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

     for (const OPReference of OPCharacters) {
        const characters = await getallOPCHARACTERS(pokemonReference.url);

        const OPelement = document.createElement('div');

        
    }
}