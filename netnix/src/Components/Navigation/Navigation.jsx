import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
    const navItems = [
        'Home',
        'Films',
        'Coming soon'
    ]
    return (
        <div className={styles.navigation}>
            <img src="" alt="" />
            <ul className={styles.navigationList}>
                {navItems.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation
