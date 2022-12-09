import React from "react";
import Nav from '../layout/Nav';
import Section from '../layout/Section';
import Article from '../layout/Article';
import Footer from '../layout/Footer';
import "../../"

function HomePage() {
    return (
        <>
            <nav className='nav'>
                <Nav />
            </nav>
            <section className='section'>
                <Section />
            </section>
            <article className='article'>
                <Article />
            </article>
            <footer className='footer'>
                {/* <Footer /> */}
            </footer>
        </>

    )
}

export default HomePage;