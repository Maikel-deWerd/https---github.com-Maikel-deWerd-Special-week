import React from 'react'
import styles from './Navigation.module.css'
import logo from './assets/netnix.png'
import SecondaryNav from '../SecondaryNav'

const Navigation = () => {
    const navItems = [
        'Home',
        'Populair',
        'Coming soon'
    ]
    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navigationList}>
                    {navItems.map((item) => (
                        <li className={styles.navigationItem} key={item}>
                            <a className={styles.links} href="/">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <SecondaryNav />
        </div>
    )
}

export default Navigation
