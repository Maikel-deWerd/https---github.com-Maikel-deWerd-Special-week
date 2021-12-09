import React from 'react'
import styles from './Segments.module.css'
import placeholder from './assets2/place.jpeg'

const Segments = ({title}) => {
    return (
        <div className={styles.films}>
            <p className={styles.title}>{title}</p>
            <div className={styles.row}>
                <img className={styles.image} src={placeholder} alt="" />
                <img className={styles.image} src={placeholder} alt="" />
                <img className={styles.image} src={placeholder} alt="" />
                <img className={styles.image} src={placeholder} alt="" />
                <img className={styles.image} src={placeholder} alt="" />
            </div>
        </div>
    )
}

export default Segments
