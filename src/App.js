import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage'; 
import ContactPage from './components/ContactPage';
import ProductDetailPage from './components/ProductDetailPage';
import './App.css'; 

function App() {
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

    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <div className="logo">Tasogare</div>
                    <ul className="nav-links">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/products">Товары</Link></li> 
                        <li><Link to="/contact">Контакты</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/products" element={<ProductsPage />} /> 
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage products={products} />} /> 
                </Routes>
                <footer className="footer">
                    <p className="address">Адрес: г. Алматы, ул. Толе Би 273/4, 12 блок</p>
                    <a href="https://maps.app.goo.gl/qHP1QcPFx8u4EBJy7" target="_blank" rel="noreferrer" className="map-link">Открыть на карте</a>
                    <div className="social-links">
                        <a href="https://www.instagram.com/tasogare.shop/" target="_blank" rel="noreferrer"><img src="/instagram-icon.png" alt="Instagram" className="social-icon" /></a>
                        <a href="https://wa.me/77762696721" target="_blank" rel="noreferrer"><img src="/whatsapp-icon.png" alt="WhatsApp" className="social-icon" /></a>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
