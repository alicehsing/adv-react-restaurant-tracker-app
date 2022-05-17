import { Switch, Route } from 'react-router-dom';
import AuthPage from './views/Auth';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <AuthPage />
      </Route>
    </Switch>
  );
}
