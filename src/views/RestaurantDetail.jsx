import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRestaurants } from '../hooks/restaurants';
import { getRestaurants } from '../services/restaurants';

export default function RestaurantDetail({}) {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const { restaurants } = useRestaurants();
  // const { name, location, notes, price, rating, type } = restaurant;

  useEffect(() => {
    setRestaurant(getRestaurants(id));
  }, [id, restaurants]);
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
