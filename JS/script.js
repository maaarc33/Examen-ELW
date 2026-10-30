const OP_API_BASEURL = 'https://onepieceapi.com/api';
async function getallOPCHARACTERS() {
    const response = await fetch(`${OP_API_BASEURL}/characters?limit=10`);
    const data = await response.json();
    return data;
}
async function getOPCHARBYURL(pokemonUrl) {
    const response = await fetch(pokemonUrl);

    if (!response.ok) {
        throw new Error('Pokemon not found');
    }

    const data = await response.json();
    return data;
}