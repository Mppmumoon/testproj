import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsPage.module.css';

const products = [
    { id: 1, name: 'Очки модель 01', price: '3500₸', description: 'Популярные в Китае и Корее очки, выражающие ваш истинный взгляд на этот мир!', image: '/images/1.jpg' },
        { id: 2, name: 'Закладки для книг в японском стиле', price: '1500₸', image: '/images/2.jpg' },
        { id: 3, name: 'Парные брелоки-пищалки', price: '1200₸', description: 'Парные брелоки издают писк при нажатии на живот. Отлично подходят для друзей и парочек', image: '/images/3.jpg' },
        { id: 4, name: 'Очки модель 02', price: '3500₸', description: 'Очки выполненные в свободном стиле. Выделяйся в толпе!', image: '/images/4.jpg' },
        { id: 5, name: 'Очки модель 03', price: '3500₸', description: 'Очки от популярной фирмы Gentle Monster. В них вас точно заметят!', image: '/images/5.jpg' },
        { id: 6, name: 'Мягкая игрушка собачка', price: '5000₸', description: 'Эта мягкая игрушка станет отличным подарком для любого праздника', image: '/images/6.jpg' },
        { id: 7, name: 'Футболка модель 01', price: '4500₸', description: 'Футболка, выполненная в стиле Аниме', image: '/images/7.jpg' },
        { id: 8, name: 'Игрушка красная панда', price: '4500₸', description: 'Подарочная красная панда ждет своего покупателя', image: '/images/8.jpg' },
        { id: 9, name: 'Футболка модель 02', price: '4500₸', description: 'Футболка, выполненная в стиле Аниме', image: '/images/9.jpg' },
        { id: 10, name: 'Конструктор красная панда', price: '1500₸', description: 'Конструктор в виде милой красной панды', image: '/images/10.jpg' },
        { id: 11, name: 'Заколка Звездочка', price: '300₸', description: 'Милые заколки в форме звездочек. Цена указана за 1шт', image: '/images/11.jpg' },
        { id: 12, name: 'Ежедневник', price: '2500₸', description: 'Сохранит в себе все самое важное', image: '/images/12.jpg' },
        { id: 13, name: 'Закладки для книг 01', price: '1500₸', description: 'Красивые закладки для книг помогут вам не потерять нужную страницу в книге', image: '/images/13.jpg' },
        { id: 14, name: 'Заколка/Значок Капибара', price: '1500₸', description: 'Приюти этих милых капибар', image: '/images/14.jpg' },
        { id: 15, name: 'Брелоки Динозаврики', price: '400₸', description: 'Доступны в 4х расцветках. Цена за 1шт', image: '/images/15.jpg' },
];

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.showcase}>
            <h2>Все товары</h2>
            <input
                type="text"
                placeholder="Поиск товаров..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className={styles.productGrid}>
                {filteredProducts.map(product => (
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

export default ProductsPage;
