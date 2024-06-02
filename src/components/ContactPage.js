import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    return (
        <div className={styles.contact}>
            <h1>Tasogare в социальных сетях!</h1>
            <p>По вопросам сотрудничества, рекламы, партнерства, претензий. Вы также можете совершить свой заказ через наши социальные сети.</p>
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/tasogare.shop/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/77762696721" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    );
};

export default ContactPage;
