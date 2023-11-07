import React, { useRef, useState } from 'react'
import styles from './Slider.module.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Slider = () => {
    const [page, setPage] = useState("product");
    const certificateContainerRef = useRef(null);

    const scrollLeft = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.certificate}>
                    <div
                        className={styles.certificateContainer}
                        ref={certificateContainerRef}
                    >

                    </div>
                    <button
                        className={styles.left_arrow}
                        onClick={scrollLeft}>
                        <BsArrowLeftCircle />
                    </button>
                    <button
                        className={styles.right_arrow}
                        onClick={scrollRight}>
                        <BsArrowRightCircle />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Slider