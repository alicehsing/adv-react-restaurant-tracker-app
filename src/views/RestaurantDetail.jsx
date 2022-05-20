import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRestaurant } from '../hooks/restaurants';

export default function RestaurantDetail({}) {
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState({});
  const { restaurant } = useRestaurant(id);
  // const { name, location, notes, price, rating, type } = restaurant;
  if (!restaurant) {
    return <p>Loading</p>;
  } else {
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
}
