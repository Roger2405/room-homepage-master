import img1Mobile from '../../assets/images/mobile-image-hero-1.jpg';
import img1Desktop from '../../assets/images/desktop-image-hero-1.jpg';
import img2Mobile from '../../assets/images/mobile-image-hero-2.jpg';
import img2Desktop from '../../assets/images/desktop-image-hero-2.jpg';
import img3Mobile from '../../assets/images/mobile-image-hero-3.jpg';
import img3Desktop from '../../assets/images/desktop-image-hero-3.jpg';


import ShopArrow from '../../assets/images/icon-arrow.svg';
import LeftArrow from '../../assets/images/icon-angle-left.svg';
import RightArrow from '../../assets/images/icon-angle-right.svg';

import styles from './styles.module.scss';
import { useState } from 'react';

export default function ImageHeader() {
    const [contentIndex, setContentIndex] = useState(0);
    const arrContent = [
        {
            title: "Discover innovative ways to decorate",
            text: "We provide unmatched quality, comfort, and style for property owners across the country.\
        Our experts combine form and function in bringing your vision to life. Create a room in your\
        own style with our collection and make your property a reflection of you and what you love.",
            src: {
                mobile: img1Mobile,
                desktop: img1Desktop
            }
        },
        {
            title: "We are available all across the globe",
            text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.\
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our\
            store locator. Any questions? Don't hesitate to contact us today.",
            src: {
                mobile: img2Mobile,
                desktop: img2Desktop

            },
        },
        {
            title: "Manufactured with the best materials",
            text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\
            to ensure that every product is made as perfect and as consistent as possible. With three decades of\
            experience in this industry, we understand what customers want for their home and office.",
            src: {
                mobile: img3Mobile,
                desktop: img3Desktop
            }
        }
    ]


    function incrementIndex() {
        setContentIndex((contentIndex + 1) % arrContent.length)
    }
    function decrementIndex() {
        let newIndex = contentIndex - 1;
        if (newIndex < 0) newIndex = (arrContent.length - 1);
        setContentIndex((newIndex));
    }

    return (
        <section className={styles.section}>
            <div className={styles['div-image']}>
                <picture className={styles.image}>
                    <source media='(max-width: 768px)' srcSet={`${arrContent[contentIndex].src.mobile}`} type="image/png" />
                    <img src={arrContent[contentIndex].src.desktop} alt="" />
                </picture>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={decrementIndex}><img src={LeftArrow}></img></button>
                    <button className={styles.button} onClick={incrementIndex}><img src={RightArrow}></img></button>

                </div>
            </div>
            <div className={styles['div-text']}>
                <h1 className={styles.title}>
                    {arrContent[contentIndex].title}
                </h1>

                <div className={styles.text}>
                    <p>
                        {arrContent[contentIndex].text}
                    </p>

                </div>


                <button className={styles.shopButton}>Shop Now <img src={ShopArrow} alt="arrow of shop now button" /></button>


            </div>



        </section>

    )
}