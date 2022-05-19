import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRestaurant, useRestaurants } from '../hooks/restaurants';
import { getRestaurants } from '../services/restaurants';

export default function RestaurantDetail({}) {
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState({});
  const { restaurant } = useRestaurant(id);
  // const { name, location, notes, price, rating, type } = restaurant;
  console.log('DETAIL', restaurant.restaurant);
  return (
    <>
      <Link to="/restaurants">Back to Restaurant List</Link>
      <article>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.location}</p>
        <p>{restaurant.notes}</p>
        <p>{restaurant.price}</p>
        <p>{restaurant.rating}</p>
        <p>{restaurant.type}</p>
      </article>
    </>
  );
}