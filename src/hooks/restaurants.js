import { useContext, useEffect } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import { getRestaurants, createRestaurant } from '../services/restaurants';

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
