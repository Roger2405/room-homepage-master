import imgLight from '../../assets/images/image-about-light.jpg';
import imgDark from '../../assets/images/image-about-dark.jpg';

import styles from './styles.module.scss';


export default function AboutSection() {

    return (
        <section className={styles['about-section']}>
            <img src={imgDark} className={styles.dark_img} alt="two modern black armchairs around a coffee table" />
            <div className={styles['div-content']}>
                <h2 className={styles.title}>About our furniture</h2>
                <p className={styles.text}>Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img src={imgLight} className={styles.light_img} alt="white chair with a light background" />

        </section>

    )

}