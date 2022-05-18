import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { user, logout } = useUser();

  return (
    <>
      <div>You're signed in as: {user.email || 'You\'re not signed in!'}</div>
      <button onClick={logout}>Sign Out</button>
    </>
  );
}
