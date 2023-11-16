import styles from './Company.module.css';
import Carousel from 'react-elastic-carousel'
import './style.css'
import { useEffect, useState } from 'react';


const CompanyCard = ({ image, heading, subHeading }) => {
    return (
        <div className={styles.image_container}>
            <img src={image} alt="" />
            <div className={styles.heading}>{heading}</div>
            <div className={styles.sub_heading}>{subHeading}</div>
        </div>
    );
};

const CompanySlider = ({ items }) => {
    const [itemsToShow, setItemsToShow] = useState(2);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth <= 600) {
                setItemsToShow(1);
            } else {
                setItemsToShow(2);
            }
        };
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, []);

    return (
        <div className={styles.slider_container}>
            <Carousel itemsToShow={itemsToShow}>
                {items.map((item, index) => (
                    <CompanyCard key={index} {...item} />
                ))}
            </Carousel>
        </div>
    );
};


export default CompanySlider