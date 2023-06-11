import React from 'react'
import styles from './Menu.module.css'
import { Link, useLocation } from 'react-router-dom'
import MenuLink from '../MenuLink';

export default function Menu() {


  const localizacao = useLocation();

  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Home
        </MenuLink>
        <MenuLink to="/aboutme">
          About Me
        </MenuLink>
      </nav>
    </header>
  )
}
