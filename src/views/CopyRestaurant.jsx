import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
// import { useUser } from '../context/UserContext';
import { useRestaurant, useRestaurants } from '../hooks/restaurants';
import RestaurantForm from '../components/RestaurantForm';

export default function CopyAndEditRestaurant() {
  const history = useHistory();
  const { id } = useParams();
  const { restaurant } = useRestaurant(id);
  const { addNewRestaurant } = useRestaurants();

  const handleSubmit = async (copied) => {
    await addNewRestaurant(copied);
    history.replace('/restaurants');
  };

  return (
    <>
      <RestaurantForm
        label="Copy Restaurant"
        restaurant={restaurant}
        onSubmit={handleSubmit}
      />
    </>
  );
}
