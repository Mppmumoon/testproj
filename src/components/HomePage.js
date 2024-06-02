import React from 'react';
import styles from './HomePage.module.css';
import ProductShowcase from './ProductShowcase';

const HomePage = () => {
    return (
        <div className={styles.home}>
            <h1>Tasogare (黄昏) - онлайн магазин самых милых вещей 🥹</h1>
            <p>Приют милых вещей! Продаем в хорошие руки!</p>
            <ProductShowcase /> 
        </div>
    );
};

export default HomePage;
