import React from 'react';

// export default function RestaurantItem({
//   id,
//   name,
//   location,
//   notes,
//   price,
//   rating,
//   type,
// }) {
//   return (
//     <ul>
//       <li>{name}</li>
//       <li>{type}</li>
//     </ul>
//   );
// }

export default function RestaurantItem({ restaurant }) {
  const { name, type } = restaurant;
  return (
    <ul>
      <li>{name}</li>
      <li>{type}</li>
    </ul>
  );
}
