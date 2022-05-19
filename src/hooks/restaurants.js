import { useContext, useEffect, useState } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import {
  getRestaurants,
  createRestaurant,
  getRestaurant,
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
        const restaurant = await getRestaurant(id);
        console.log('HOOK', restaurant);
        setRestaurant(restaurant);
      } catch (error) {
        throw new Error('Unable to fetch data');
      }
    };
    load();
  }, [id]);

  return { restaurant };
}
