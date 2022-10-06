
import Header from '../../components/Header';
import ImageHeader from '../../components/ImageHeader';

import './styles.scss';


function Home() {

    return (
        <div className="home">
            <Header />
            <ImageHeader />


            <h1>
                Discover innovative ways to decorate
            </h1>

            <p>
                We provide unmatched quality, comfort, and style for property owners across the country.
                Our experts combine form and function in bringing your vision to life. Create a room in your
                own style with our collection and make your property a reflection of you and what you love.
            </p>

            <a href="">Shop now</a>

            <h2>We are available all across the globe</h2>

            With stores all over the world, it's easy for you to find furniture for your home or place of business.
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.

            <a href="">Shop now</a>

            <h2>Manufactured with the best materials</h2>

            <p>
                Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                to ensure that every product is made as perfect and as consistent as possible. With three decades of
                experience in this industry, we understand what customers want for their home and office.
            </p>

            <a href="">Shop now</a>

            <footer>
                <h2><code>About our furniture</code></h2>

                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>

            </footer>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Roger Romaniczen</a>.
            </div>
        </div>
    )
}

export default Home
