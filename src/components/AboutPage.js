import React, { Component } from 'react';
import styles from './AboutPage.module.css';

class AboutPage extends Component {
    render() {
        return (
            <div className={styles.about}>
                <h1>Tasogare (黄昏) - онлайн магазин самых милых вещей</h1>
                <p>Данный сайт является витриной всех товаров. Тут вы можете ознакомиться с концепцией нашего магазина, а также осуществить свой заказ через наши социальные сети! Мы были основаны в 2024 году и уже имеем много довольных отзывов</p>
                <a href="https://www.instagram.com/stories/highlights/18050545345571113/" target="_blank" rel="noopener noreferrer" className={styles.reviewsButton}>Перейти к отзывам</a>
            </div>
        );
    }
}

export default AboutPage;
