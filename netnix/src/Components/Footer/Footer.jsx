import React from 'react';

import FooterLinks from '../FooterLinks';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.box}>
            <FooterLinks />
        </footer>
    );
};

export default Footer;