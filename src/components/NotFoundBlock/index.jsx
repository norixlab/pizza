import React from 'react';
import styles from './NotFoundBlock.module.scss';

console.log(styles);
export const NotFoundBlock = () => {
    return (
        <div className={styles.center}>
            <h1>
                <span>🤨</span>
                <br />
                Опачки!!!
            </h1>
            <p>Сорян! Такая страница отсутствует в этом ларьке!</p>
        </div>
    );
};
