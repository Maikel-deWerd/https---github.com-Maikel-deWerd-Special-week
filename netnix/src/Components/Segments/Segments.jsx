import React from 'react'
import styles from './Segments.module.css'
import placeholder from './assets2/place.jpeg'
import placeholder1 from './assets2/Pasific.jpeg'
import placeholder2 from './assets2/Tomb.jpeg'
import placeholder3 from './assets2/Hacksaw.jpeg'
import video from './assets2/trailer.mp4'
import Popup from '../Popup'
import {useState} from 'react'

const Segments = ({title}) => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className={styles.films}>

            
            <p className={styles.title}>{title}</p>
            <main>
                <button className={styles.btnPos} onClick={() => setButtonPopup(true)}>Open</button>
            </main>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                <h3>Pacific Rim Uprising</h3>
                <div className={styles.popContent}>
                    <video controls className={styles.video} src={video}></video>
                    <p>
                        Jake, de zoon va Stacker Pentecost, gaat samen met een oude pilotenvriend en een Jaeger-hacker opnieuw de strijd aan met Kaiju-monsters om de mensheid te redden.
                    </p> 
                </div>    
            </Popup>
            <div className={styles.row}>
                <img className={styles.image} src={placeholder1} alt="" />
                <img className={styles.image} src={placeholder2} alt="" />
                <img className={styles.image} src={placeholder3} alt="" />
                <img className={styles.image} src={placeholder} alt="" />
                <img className={styles.image} src={placeholder} alt="" />
            </div>
        </div>
    )
}

export default Segments
