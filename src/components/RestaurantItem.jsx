import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useRestaurant } from '../hooks/restaurants';
import styles from './RestaurantItem.css';

export default function RestaurantItem({ restaurant }) {
  const { name, type, id } = restaurant;
  const history = useHistory();
  const { remove } = useRestaurant(id);
  const { user } = useUser();
  const isOwner = user.id === restaurant.user_id;
  const handleDelete = async () => {
    if (!confirm('Are you sure?')) return;
    await remove();
    history.replace('/restaurants');
  };
  return (
    <>
      <div className={styles.list}>
        <Link to={`/restaurants/${id}`}>
          <ul>
            <li>Restaurant Name:&nbsp;{name}</li>
            <li>Restaurant Type:&nbsp;{type}</li>
          </ul>
        </Link>
        {isOwner && (
          <Link to={`/restaurants/${id}/edit`}>
            <button>Edit</button>
          </Link>
        )}
        {isOwner && <button onClick={handleDelete}>Delete</button>}
        {isOwner || (
          <Link to={`/restaurants/${id}/copy`}>
            <button>Copy</button>
          </Link>
        )}
      </div>
    </>
  );
}
