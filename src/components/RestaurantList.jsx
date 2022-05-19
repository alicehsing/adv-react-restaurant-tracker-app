import React from 'react';
import { useRestaurants } from '../hooks/restaurants';
import RestaurantItem from './RestaurantItem';

export default function RestaurantList() {
  const { restaurants } = useRestaurants();
  console.log('List', restaurants);

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
