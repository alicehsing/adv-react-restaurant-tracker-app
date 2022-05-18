import React from 'react';
import RestaurantForm from '../components/RestaurantForm';
import RestaurantList from '../components/RestaurantList';

export default function Restaurant() {
  return (
    <main>
      <RestaurantForm />
      <RestaurantList />
    </main>
  );
}
