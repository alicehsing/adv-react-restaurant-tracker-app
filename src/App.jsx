import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './views/Header';
import Restaurant from './views/Restaurant';
import AuthPage from './views/Auth';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <>
      <UserProvider>
      <Header />
      <Switch>
        <Route path="/login">
          <AuthPage />
        </Route>
        <PrivateRoute path="/restaurants">
          <Restaurant />
        </PrivateRoute>
        </Switch>
        </UserProvider>
    </>
  );
}
