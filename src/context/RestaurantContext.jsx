import { createContext, useReducer } from 'react';

export const RestaurantContext = createContext();

// reducer function
const restaurantReducer = (restaurants, { type, payload }) => {
  switch (type) {
    case 'CREATE':
      // return our updated state with the newly added restaurant at the beginning of our list
      return [payload[0], ...restaurants];
    case 'RESET':
      return payload;
    case 'UPDATE':
      return restaurants.map((restaurant) => (restaurant.id === payload.id ? payload : restaurant));
    case 'DELETE':
      return restaurants.filter((restaurant) => restaurant.id !== payload.id);
    default:
      throw new Error(`Action ${type} is not supported.`);
  }
};

export const RestaurantProvider = ({ children }) => {
  // bring in useReducer hook, pass in reducer function
  const [restaurants, dispatch] = useReducer(restaurantReducer);

  return (
    <RestaurantContext.Provider value={{ restaurants, dispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
};
