import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useRestaurant, useRestaurants } from '../hooks/restaurants';
import { getRestaurants } from '../services/restaurants';

export default function RestaurantItem({ restaurant }) {
  const { name, type, id } = restaurant;
  const history = useHistory();
  const location = useLocation();
  const { remove } = useRestaurant(id);
  const { restaurants } = useRestaurants();

  const { user } = useUser();
  const isOwner = user.id === restaurant.user_id;

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete?')) return;
    await remove();
    history.replace('/restaurants');
    // location.reload();
  };

  // useEffect(() => {
  //   const load = async () => {
  //     const restaurants = await getRestaurants();
  //   };
  //   load();
  // }, []);

  return (
    <>
      <div>
        <Link to={`/restaurants/${id}`}>
          <ul>
            <li>{name}</li>
            <li>{type}</li>
          </ul>
        </Link>
        {isOwner && (
          <Link to={`/restaurants/${id}/edit`}>
            <button>Edit</button>
          </Link>
        )}
        {isOwner && <button onClick={handleDelete}>Delete</button>}
      </div>
    </>
  );
}
