import { Link } from 'react-router-dom';

export default function RestaurantItem({ restaurant }) {
  const { name, type, id } = restaurant;
  return (
    <Link to={`/restaurants/${id}`}>
      <ul>
        <li>{name}</li>
        <li>{type}</li>
      </ul>
    </Link>
  );
}
