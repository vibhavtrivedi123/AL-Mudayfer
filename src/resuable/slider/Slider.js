import React, { useRef } from 'react'
import styles from './Slider.module.css';

import worker from '../../images/join/worker.jpg'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

const Slider = () => {
    const sliderRef = useRef(null);

    const left = () => {
        const slides = sliderRef.current;
        if (slides) {
            const width = slides.clientWidth;
            slides.scrollLeft = slides.scrollLeft - width;
            console.log(width);
        }
    };
    const right = () => {
        const slides = sliderRef.current;
        if (slides) {
            const width = slides.clientWidth;
            slides.scrollLeft = slides.scrollLeft + width;
        }
    };

    return (
        <>
            <div className={styles.slider_container}>
                <div className={styles.container} ref={sliderRef}>

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

                </div>


                <div className={styles.buttons}>
                    <button className={styles.button} onClick={left}>
                        <AiOutlineLeftCircle />
                    </button>
                    <button className={styles.button} onClick={right}>
                        <AiOutlineRightCircle />
                    </button>
                </div>

            </div>
        </>
    )
}

export default Slider