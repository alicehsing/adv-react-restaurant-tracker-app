import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';
import { useUser } from '../context/UserContext';
import { useRestaurant } from '../hooks/restaurants';
import { updateRestaurantById } from '../services/restaurants';

export default function EditRestaurant() {
    const history = useHistory();
    const { id } = useParams();
    const { restaurant, update } = useRestaurant(id);
    const { user } = useUser();

    if (!restaurant) return null;

    const isOwner = user.email === restaurant.email;
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
        <Link to={detailURL}>{restaurant.name}</Link> 
        <RestaurantForm label='Edit Suggestion' restaurant={restaurant} onSubmit={handleSubmit} />  
    </>
  )
}
