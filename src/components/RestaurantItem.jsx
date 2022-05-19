import React from 'react'

export default function RestaurantItem({ id, name, location, notes, price, rating, type }) {

  return (
   <ul>
      <li>{name}</li>
      <li>{type}</li>
      <li>{location}</li>
      <li>{notes}</li>
      <li>{price}</li>
      <li>{rating}</li>
      <li>{id}</li>
    </ul>
  )
}
