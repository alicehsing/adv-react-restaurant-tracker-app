import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function RestaurantItem({ restaurant }) {
  const { name, type, id } = restaurant;
  // const { id } = useParams();

  const { user } = useUser();
  const isOwner = user.id === restaurant.user_id;
  console.log('USER', user);

  return (
    <>
    <div>
      <Link to={`/restaurants/${id}`}>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
        </ul>
        </Link>
        {isOwner && <Link to={`/restaurants/${id}/edit`}>
          <button>Edit</button>
        </Link>}
        <button>Delete</button>
      </div>
    </>
  );
}
