import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <>
        <h1>Welcome to Yummi!!!</h1>
        <h2>Log your favorite restaurants</h2>
        <Link to='/restaurants'>Start your log here</Link>  
    </>
  )
}
