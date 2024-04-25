// imports
import { useEffect, useState } from 'react';
import { getFavouritesByUserId } from '../helpers/favouritesHelpers';

export function useFavourites(userId) {
  
  const [favourites, setFavourites] = useState([]);
  
  useEffect(() => {

    if (userId) {
      getFavouritesByUserId(userId)
      .then((data) => {
        console.log("data", data);
        // setFavourites(data['data']);
      });
    };
    
  }, [userId]);

  return { favourites };

};