import { useContext, useEffect, useState } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import {
  getRestaurants,
  createRestaurant,
  getRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
} from '../services/restaurants';

export function useRestaurants() {
  const context = useContext(RestaurantContext);

  if (context === undefined) {
    throw new Error('useRestaurants must be used within a RestaurantContext');
  }

  const { restaurants, dispatch } = context;

  useEffect(() => {
    if (restaurants) return;

    const load = async () => {
      try {
        const payload = await getRestaurants();
        dispatch({ type: 'RESET', payload: payload });
        console.log('PAYLOAD', payload);
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    };
    load();
  }, []);

  const addNewRestaurant = async (restaurant) => {
    try {
      const created = await createRestaurant(restaurant);
      dispatch({ type: 'CREATE', payload: created });
    } catch (error) {
      throw new Error('Failed to add a restaurant');
    }
  };

  return { restaurants, addNewRestaurant };
}

export function useRestaurant(id) {
  const context = useContext(RestaurantContext);

  if (context === undefined) {
    throw new Error('useRestaurant must be used within RestaurantContext');
  }

  const { restaurants, dispatch } = context;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const fetchRestaurant = await getRestaurant(id);
        // dispatch({ type: 'RESET', payload: fetchRestaurant });
        setRestaurant(fetchRestaurant);
      } catch (error) {
        throw new Error('Unable to fetch data');
      }
    };
    load();
  }, [id]);

  const update = async (edits) => {
    if (!restaurant) return;

    try {
      const updated = await updateRestaurantById({ ...restaurant, ...edits });
      console.log('UPDATED', updated);
      const payload = { ...updated };

      setRestaurant(payload);
      if (restaurants) dispatch({ type: 'UPDATE', payload: payload });
      return payload;
    } catch (error) {
      throw new error('unsuccessful update');
    }
  };

  const remove = async () => {
    if (!restaurant) return;

    try {
      console.log('restaurant', restaurant);
      const payload = await deleteRestaurantById(restaurant.id);
      setRestaurant(null);
      if (restaurants) dispatch({ type: 'DELETE', payload: payload });
      return payload;
    } catch (error) {
      throw new error('Delete not successful');
    }
  };

  return { restaurant, update, remove };
}
