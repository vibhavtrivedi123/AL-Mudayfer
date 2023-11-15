import styles from './Company.module.css';
import Carousel from 'react-elastic-carousel'
import './style.css'


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
    return (
        <div className={styles.slider_container}>
            <Carousel itemsToShow={2}>
                {items.map((item, index) => (
                    <CompanyCard key={index} {...item} />
                ))}
            </Carousel>
        </div>
    );
};


export default CompanySlider