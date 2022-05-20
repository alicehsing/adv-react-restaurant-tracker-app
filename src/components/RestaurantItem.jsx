import { Link } from 'react-router-dom';

export default function RestaurantItem({ restaurant }) {
  const { name, type, id } = restaurant;



  return (
    <>
    <div>
      <Link to={`/restaurants/${id}`}>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
        </ul>
        </Link>
        <Link to={`/restaurants/${id}/edit`}>
        <button>Edit</button>
        </Link>
        <button>Delete</button>
      </div>
    </>
  );
}
