import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const { signUp, signIn } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  return (
    <>
    <h1>Auth</h1>
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
      <button type="submit">Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <p>{error}</p>
    </form>
  </>
  )
}

