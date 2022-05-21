import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';
import { useUser } from '../context/UserContext';
import { useRestaurant } from '../hooks/restaurants';
import { updateRestaurantById } from '../services/restaurants';

export default function EditRestaurant() {
  const history = useHistory();
  const { id } = useParams();
  const { restaurant, update } = useRestaurant(id);
  const { user } = useUser();
  console.log('restaurant', restaurant);
  if (!restaurant) return null;

  const isOwner = user.id === restaurant?.user_id;
  console.log('USERID', user.id);
  console.log('res.user_id', restaurant.user_id);
  const detailURL = `/restaurants/${id}`;

  if (!isOwner) {
    history.replace(detailURL);
    return null;
  }

  const handleSubmit = async (edited) => {
    await update(edited);
    history.push('/restaurants');
  };

  return (
    <>
      <Link to={detailURL}>Back to Restaurant Detail Page</Link>
      <RestaurantForm
        label="Edit Restaurant"
        restaurant={restaurant}
        onSubmit={handleSubmit}
      />
    </>
  );
}
