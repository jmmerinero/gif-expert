export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ZsEh7b3cg6L7KKCt30C1lkflQPtszM1m&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }));

  console.log(gifs);
  return gifs;
}