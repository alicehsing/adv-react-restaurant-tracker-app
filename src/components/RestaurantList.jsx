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
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            // id={restaurant.id}
            // name={restaurant.name}
            // location={restaurant.location}
            // notes={restaurant.notes}
            // price={restaurant.price}
            // rating={restaurant.rating}
            // type={restaurant.type}
          />
        ))}
      </ul>
    );
  }
}
