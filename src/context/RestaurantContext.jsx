import { createContext, useReducer } from 'react';

// set initial states
// const initialRestaurants = [
//   {
//     id: 0,
//     name: 'Can Font',
//     location: '1015 NW Northrup St, Portland, OR 97209',
//     notes:
//       'Barelona-inspired tapas served in an airy, contemporary space with a full bar.',
//     price: '$$$',
//     rating: 4,
//     type: 'Spanish Contemporary',
//   },
//   {
//     id: 1,
//     name: 'Chapala',
//     location: '68 W 29th Ave, Eugene, OR 97405',
//     notes:
//       'We pride ourselves in our fresh ingredients and partnering with local providers in the preparation of our dishes.',
//     price: '$$',
//     rating: 4,
//     type: 'Mexican',
//   },
// ];
export const RestaurantContext = createContext();

// reducer function
const restaurantReducer = (restaurants, { type, payload }) => {
  switch (type) {
    case 'CREATE':
      // return our updated state with the newly added restaurant at the beginning of our list
      return [payload, ...restaurants];
    case 'RESET':
      return payload;

    default:
      throw new Error(`Action ${type} is not supported.`);
  }
};

export const RestaurantProvider = ({ children }) => {
  // bring in useReducer hook, pass in reducer function and set initialRestaurants state
  const [restaurants, dispatch] = useReducer(restaurantReducer);

  return (
    <RestaurantContext.Provider value={{ restaurants, dispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
};
