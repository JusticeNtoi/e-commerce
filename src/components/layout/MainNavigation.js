import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={ classes.header }>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/newMeetups'>New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}
