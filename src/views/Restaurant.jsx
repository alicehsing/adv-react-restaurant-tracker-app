import React from 'react';
import AddRestaurant from '../components/AddRestaurant';
import RestaurantList from '../components/RestaurantList';

export default function Restaurant() {
  return (
    <main>
      <AddRestaurant />
      <RestaurantList />
    </main>
  );
}
