
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import styles from './Sample.module.css';
import React, { useRef } from 'react';

const Sample = () => {
    const imagesRef = useRef(null);

    const left = () => {
        const images = imagesRef.current;
        if (images) {
            const width = images.clientWidth;
            images.scrollLeft = images.scrollLeft - width;
        }
    };

    const right = () => {
        const images = imagesRef.current;
        if (images) {
            const width = images.clientWidth;
            images.scrollLeft = images.scrollLeft + width;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.images} ref={imagesRef}>

                <div className={styles.image}>
                    <div className={styles.card_container} >
                        <div className={styles.image}>
                            <div className={styles.badge}>dealer</div>
                            {/* <img src={worker} alt="" /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>MATERIAL DEALER</div>
                            <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                            <div className={styles.button}>read more</div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.card_container} >
                        <div className={styles.image}>
                            <div className={styles.badge}>dealer</div>
                            {/* <img src={worker} alt="" /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>MATERIAL DEALER</div>
                            <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                            <div className={styles.button}>read more</div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.card_container} >
                        <div className={styles.image}>
                            <div className={styles.badge}>dealer</div>
                            {/* <img src={worker} alt="" /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>MATERIAL DEALER</div>
                            <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                            <div className={styles.button}>read more</div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.card_container} >
                        <div className={styles.image}>
                            <div className={styles.badge}>dealer</div>
                            {/* <img src={worker} alt="" /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>MATERIAL DEALER</div>
                            <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                            <div className={styles.button}>read more</div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.card_container} >
                        <div className={styles.image}>
                            <div className={styles.badge}>dealer</div>
                            {/* <img src={worker} alt="" /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>MATERIAL DEALER</div>
                            <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                            <div className={styles.button}>read more</div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <div className={styles.card_container} >
                        <div className={styles.image}>
                            <div className={styles.badge}>dealer</div>
                            {/* <img src={worker} alt="" /> */}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>MATERIAL DEALER</div>
                            <div className={styles.sub_heading}>Lorem ipsum dolor sit amet </div>
                            <div className={styles.button}>read more</div>
                        </div>
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
    )
}

export default Sample