import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductShowcase.module.css';

const products = [
    { id: 1, name: 'Очки модель 01', price: '3500₸', image: './images/1.jpg' },
    { id: 2, name: 'Закладки для книг в японском стиле', price: '1500₸', image: './images/2.jpg' },
    { id: 3, name: 'Парные брелоки-пищалки', price: '1200₸', image: './images/3.jpg' },
    { id: 4, name: 'Очки модель 02', price: '3500₸', image: './images/4.jpg' },
    { id: 5, name: 'Очки модель 03', price: '3500₸', image: './images/5.jpg' },
    { id: 6, name: 'Мягкая игрушка собачка', price: '5000₸', image: './images/6.jpg' },
    { id: 7, name: 'Футболка модель 01', price: '4500₸', image: './images/7.jpg' },

];

const ProductShowcase = () => {
    return (
        <div className={styles.showcase}>
            <h2>Топ продаж</h2>
            <div className={styles.productGrid}>
                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductShowcase;
