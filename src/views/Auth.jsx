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

  const handleSignIn = async (event) => {
  try {
    event.preventDefault();
    await signIn(email, password);
    const url = location.search.origin ? location.search.pathname : '/restaurants';

    history.replace(url);

  } catch (error) {
    setError(error.message);
  }
  } 
  
  const handleSignUp = async (event) => {
    try {
      event.preventDefault();
      await signUp(email, password);
      const url = location.search.origin ? location.search.pathname : '/restaurants';
  
      history.replace(url);
  
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
    <h1>Auth</h1>
    <form onSubmit={handleSignIn}>
      <input type="email" id='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <input type="password" id='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
      <button type="submit">Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <p>{error}</p>
    </form>
  </>
  )
}

