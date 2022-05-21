import React from 'react';
import { useUser } from '../context/UserContext';
import styles from './Header.css'

export default function Header() {
  const { user, logout } = useUser();

  return (
    <div className={styles.header}>
      <div>
        <h2>You're signed in as: {user.email || 'You\'re not signed in!'}</h2>
      </div>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}
