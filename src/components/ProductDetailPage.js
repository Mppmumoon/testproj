import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div className={styles.productDetails}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
            <a href="https://www.instagram.com/tasogare.shop/" rel="noopener noreferrer" target="_blank" className={styles.buyButton}>Купить</a>
        </div>
    );
};

export default ProductDetailPage;
