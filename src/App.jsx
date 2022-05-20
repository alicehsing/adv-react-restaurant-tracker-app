import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './views/Header';
import Home from './views/Home';
import Restaurant from './views/Restaurant';
import AuthPage from './views/Auth';
import RestaurantDetail from './views/RestaurantDetail';
import { UserProvider } from './context/UserContext';
import { RestaurantProvider } from './context/RestaurantContext';
import EditRestaurant from './views/EditRestaurant';

export default function App() {
  return (
    <>
      <UserProvider>
        <RestaurantProvider>
          <Header />
          <Switch>
            <Route path="/login">
              <AuthPage />
            </Route>
            <PrivateRoute exact path="/restaurants/:id">
              <RestaurantDetail />
            </PrivateRoute>
            <PrivateRoute exact path="/restaurants">
              <Restaurant />
            </PrivateRoute>
            <PrivateRoute exact path="/restaurants/:id/edit">
              <EditRestaurant />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </RestaurantProvider>
      </UserProvider>
    </>
  );
}
