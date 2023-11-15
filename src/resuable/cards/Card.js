import React from 'react'
import styles from './Card.module.css';
import message from '../../images/about/message.svg'
import vision from '../../images/about/vision.svg'
import vision_big from '../../images/about/vision.jpg'
import message_big from '../../images/about/message.jpg'
import value_big from '../../images/about/value.jpg'

const Card = ({
    image1, icon1,
    image2, icon2,
    image3, icon3,
    heading1, subHeading1,
    heading2, subHeading2,
    heading3, subHeading3,
}) => {
    return (
        // <>
        //     <div className={styles.container}>

        //         <div className={styles.card}>
        //             <div className={styles.image}>
        //                 <img src={vision_big} alt="" />
        //             </div>
        //             <div className={styles.content}>
        //                 <div className={styles.icon}>
        //                     <img src={vision} alt="" />
        //                 </div>
        //                 <div className={styles.heading}>
        //                     our vision
        //                 </div>
        //                 <div className={styles.sub_heading}>
        //                     Continuous development to maintain a prominent brand in the field of construction in order to continue to lead and provide a national product with high efficiency.
        //                 </div>
        //             </div>
        //         </div>


        //         <div className={styles.card_down}>
        //             <div className={styles.image}>
        //                 <img src={message_big} alt="" />
        //             </div>
        //             <div className={styles.content}>
        //                 <div className={styles.icon}>
        //                     <img src={message} alt="" />
        //                 </div>
        //                 <div className={styles.heading}>
        //                     our message
        //                 </div>
        //                 <div className={styles.sub_heading}>
        //                     Together towards the future - our slogan that we believe in and always strive to achieve by becoming the future for the industrial sector in the field of construction.
        //                 </div>
        //             </div>
        //         </div>



        //         <div className={styles.card}>
        //             <div className={styles.image}>
        //                 <img src={value_big} alt="" />
        //             </div>
        //             <div className={styles.content}>
        //                 <div className={styles.icon}>
        //                     <img src={vision} alt="" />
        //                 </div>
        //                 <div className={styles.heading}>
        //                     our values
        //                 </div>
        //                 <div className={styles.sub_heading}>
        //                     Leadership and Development.
        //                     Honest and Integrity.
        //                     Community Service.
        //                 </div>
        //             </div>
        //         </div>


        //     </div>
        // </>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image1} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <img src={icon1} alt="" />
                    </div>
                    <div className={styles.heading}>{heading1}</div>
                    <div className={styles.sub_heading}>{subHeading1}</div>
                </div>
            </div>
            <div className={styles.card_down}>
                <div className={styles.image}>
                    <img src={image2} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <img src={icon2} alt="" />
                    </div>
                    <div className={styles.heading}>{heading2}</div>
                    <div className={styles.sub_heading}>{subHeading2}</div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={image3} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <img src={icon3} alt="" />
                    </div>
                    <div className={styles.heading}>{heading3}</div>
                    <div className={styles.sub_heading}>{subHeading3}</div>
                </div>
            </div>
        </div>
    )
}

export default Card