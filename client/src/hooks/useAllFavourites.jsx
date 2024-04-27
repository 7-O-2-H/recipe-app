// imports
import { useEffect, useState } from 'react';
import { getAllFavourites } from '../helpers/favouritesHelpers';

export function useAllFavourites() {
  
  const [allFavourites, setAllFavourites] = useState([]);
  
  useEffect(() => {

    getAllFavourites()
    .then((data) => {
      setAllFavourites(data);
    });
    
  }, []);

  return { allFavourites };

};