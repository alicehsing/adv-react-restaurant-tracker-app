import React from 'react';

export default function RestaurantItem({ restaurant }) {
  const { name, type } = restaurant;
  return (
    <ul>
      <li>{name}</li>
      <li>{type}</li>
    </ul>
  );
}
