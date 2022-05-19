import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { user, logout } = useUser();

  return (
    <>
      <div>
        <h2>You're signed in as: {user.email || 'You\'re not signed in!'}</h2>
      </div>
      <button onClick={logout}>Sign Out</button>
    </>
  );
}
