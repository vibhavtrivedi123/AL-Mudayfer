import styles from './Company.module.css';
import img1 from '../../images/const1.jpg'
import img2 from '../../images/const2.jpg'

import Carousel from 'react-elastic-carousel'
import './style.css'
import Heading from '../../components/Heading/Heading';

const CompanySlider = () => {
    return (
        <>
            <div className={styles.slider_container}>

                <Carousel itemsToShow={2}>
                    <div className={styles.image_container}>
                        <img src={img1} alt="" />
                        <div className={styles.heading}>
                            contruction
                        </div>
                        <div className={styles.sub_heading}>
                            Origins of Expertise Contracting Est
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img src={img2} alt="" />
                        <div className={styles.heading}>
                            contruction
                        </div>
                        <div className={styles.sub_heading}>
                        Badr Al Dosari Contracting Est
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img src={img1} alt="" />
                        <div className={styles.heading}>
                            contruction
                        </div>
                        <div className={styles.sub_heading}>
                            Origins of Expertise Contracting Est
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img src={img2} alt="" />
                        <div className={styles.heading}>
                            contruction
                        </div>
                        <div className={styles.sub_heading}>
                            Origins of Expertise Contracting Est
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img src={img1} alt="" />
                        <div className={styles.heading}>
                            contruction
                        </div>
                        <div className={styles.sub_heading}>
                            Origins of Expertise Contracting Est
                        </div>
                    </div>
                    <div className={styles.image_container}>
                        <img src={img2} alt="" />
                        <div className={styles.heading}>
                            contruction
                        </div>
                        <div className={styles.sub_heading}>
                            Origins of Expertise Contracting Est
                        </div>
                    </div>
                </Carousel>
            </div>

        </>
    )
}

export default CompanySlider