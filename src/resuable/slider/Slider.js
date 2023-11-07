import React, { useRef, useState } from 'react'
import styles from './Slider.module.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import worker from '../../images/join/worker.jpg'

const Slider = () => {
    const [page, setPage] = useState("product");
    const certificateContainerRef = useRef(null);

    const scrollLeft = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft += 200;
        }
    };

    return (
        <>
            <div className={styles.container} ref={certificateContainerRef}>


                <div className={styles.card_container} >
                    <div className={styles.image}>
                        <div className={styles.badge}>dealer</div>
                        <img src={worker} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.heading}>MATERIAL DEALER</div>
                        <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                        <div className={styles.button}>read more</div>
                    </div>
                </div>

                <div className={styles.card_container} >
                    <div className={styles.image}>
                        <div className={styles.badge}>dealer</div>
                        <img src={worker} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.heading}>MATERIAL DEALER</div>
                        <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                        <div className={styles.button}>read more</div>
                    </div>
                </div>

                <div className={styles.card_container} >
                    <div className={styles.image}>
                        <div className={styles.badge}>dealer</div>
                        <img src={worker} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.heading}>MATERIAL DEALER</div>
                        <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                        <div className={styles.button}>read more</div>
                    </div>
                </div>

                {/* <div className={styles.card_container} >
                    <div className={styles.image}>
                        <div className={styles.badge}>dealer</div>
                        <img src={worker} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.heading}>MATERIAL DEALER</div>
                        <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                        <div className={styles.button}>read more</div>
                    </div>
                </div> */}

            </div>

            <div className={styles.arrow_container}>
                <div className={styles.arrow} onClick={scrollLeft}>
                    <BsArrowLeftCircle size={40} />
                </div>
                <div className={styles.arrow} onClick={scrollRight}>
                    <BsArrowRightCircle size={40} />
                </div>
            </div>



        </>
    )
}

export default Slider