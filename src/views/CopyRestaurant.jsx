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

  if (!restaurant) return null;
  
  const handleCopy = async (copied) => {
    await addNewRestaurant(copied);
    history.replace('/restaurants');
  };

  return (
    <>
      <Link to="/restaurants" >Back to List of Restaurants</Link>
      <RestaurantForm
        label="Copy Restaurant"
        restaurant={restaurant}
        onCopy={handleCopy}
      />
    </>
  );
}
