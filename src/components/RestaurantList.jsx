import { useEffect } from 'react';
import { useRestaurants } from '../hooks/restaurants';
import RestaurantItem from './RestaurantItem';
import { getRestaurants } from '../services/restaurants';

export default function RestaurantList() {
  const { restaurants } = useRestaurants();

  // useEffect(() => {
  //   const load = async () => {
  //     await getRestaurants();
  //   };
  //   load();
  // }, []);

  if (!restaurants) {
    return <p>Loading</p>;
  } else {
    return (
      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    );
  }
}
