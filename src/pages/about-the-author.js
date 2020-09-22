import React from 'react'
import Layout from '../components/layout'
import Nav from "../components/navigation/nav";
import Banner from '../components/non-front-banner'
import Footer from "../components/footer/footer"
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props) => {
    console.log(props.path);
    return (
        <>
            <Layout>

                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                </h4>

                                <span className="ata-span-fx">

                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Lady Simone is a doctor of naturopathy, pastor, entrepreneur, and author of five books,
                                the latest being Financial Freedom by Faith. Her workshops, lectures, and seminars on natural
                                healing with iridology, healing with alternative medicine, the power of faith, and manifesting
                                money set people free to live abundant, healthier lives and make her a captivating, sought-after
                                motivational speaker. Visit www.drsimonelord.com for the addresses for juice bar, church, wellness
                                center, books, health supplements, events, and upcoming retreats.
                            </p>

                            <p>
                                Her corporate background and journalistic and media career has allowed her to meet and interview
                                many powerful leaders: President Obama, First Lady Michelle Obama, Pulitzer Prize winners, artists,
                                literary geniuses, and thinkers.
                            </p>

                            <p>
                                Lady Simone has earned honorary doctorate degrees in humanities and ministry and also has a bachelor
                                of arts degree from Brooklyn College, New York. She is the recipient of numerous awards from the US Senate,
                                Brooklyn Borough president, mayor of New York, council of New York, and many more.
                            </p>


                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Roxanne Simone </span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>
                <Footer />
            </Layout>
        </>
    )
}


export default ATB;