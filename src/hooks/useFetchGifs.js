import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const get = async() => {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);
  }

  useEffect(() => { get() }, []);

  return {
    gifs,
    isLoading
  };
}
