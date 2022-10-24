export const fetchCharacters = async (url?: string) => {

    const URL = url
        ? url
        : `https://rickandmortyapi.com/api/character`

    const res = await window.fetch(URL)
    const data: Promise<any> = await res.json()

    return data
}