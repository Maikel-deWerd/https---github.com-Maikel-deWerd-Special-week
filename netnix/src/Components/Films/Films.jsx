import React from 'react'
import styles from './Films.module.css'
import Segments from '../Segments/Segments'

const Films = () => {
    return (
        <div className={styles.row}>
            <Segments title='Populair'/>
            <Segments />
            <Segments title='Coming soon'/>
            <Segments />
        </div>
    )
}

export default Films
