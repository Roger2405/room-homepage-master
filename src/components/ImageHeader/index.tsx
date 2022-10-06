import img1Mobile from '../../assets/images/mobile-image-hero-1.jpg';
import img1Desktop from '../../assets/images/desktop-image-hero-1.jpg';
import ShopArrow from '../../assets/images/icon-arrow.svg';
import LeftArrow from '../../assets/images/icon-angle-left.svg';
import RightArrow from '../../assets/images/icon-angle-right.svg';

import styles from './styles.module.scss';

export default function ImageHeader() {
    return (
        <>
            <div className={styles['div-image']}>
                <picture className={styles.image}>
                    <source media='(max-width: 768px)' srcSet={img1Mobile} type="image/png" />
                    <img src={img1Desktop} alt="" />
                </picture>
                <div className={styles.buttons}>
                    <button className={styles.button}><img src={LeftArrow}></img></button>
                    <button className={styles.button}><img src={RightArrow}></img></button>

                </div>
            </div>
            <div className={styles['div-text']}>
                <h1 className={styles.title}>
                    Discover innovative ways to decorate
                </h1>

                <p className={styles.text}>
                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                </p>


                <button className={styles.shopButton}>Shop Now <img src={ShopArrow} alt="arrow of shop now button" /></button>


            </div>



        </>

    )
}