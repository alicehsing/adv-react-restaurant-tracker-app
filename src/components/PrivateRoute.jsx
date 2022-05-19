import { Redirect, Route, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

// a wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated
export default function PrivateRoute({ children, ...rest }) {
  // bring in the user {email, password} from context
  const { user } = useUser();
  const location = useLocation();
  return (
    // is there a user? if yes, render the designated private page. If not, redirect to authentication page
    // defining some state to send along(redirects) through the login page using location
    <Route {...rest}>
      {user.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}
