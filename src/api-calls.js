export const getCards = (artistName) => {
  return fetch(`https://api.magicthegathering.io/v1/cards?artist=${artistName}`)
    .then(response => response.json())
}
