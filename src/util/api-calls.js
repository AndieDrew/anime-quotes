export const getQuote = () => {
  return fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json()
  )
}
