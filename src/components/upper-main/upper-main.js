import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../../static/author/main_author.png'
import { MDBMask, MDBView } from "mdbreact";

const LowerMain = () => {
    return (
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <MDBView className="rounded z-depth-0 mb-lg-0 mb-4" hover waves>
                                <img src={AuthorImg} />
                                <a href="#!">
                                    <MDBMask overlay="white-light" className="flex-center" />
                                </a>
                            </MDBView>
                        </div>

                        <div className="wrapper-auth-content">

                            <p>
                                Lady Simone is a doctor of naturopathy, pastor, entrepreneur,
                                and author of five books, the latest being Financial Freedom by
                                Faith. Her workshops, lectures, and seminars on natural healing with
                                iridology, healing with alternative medicine, the power of faith, and
                                manifesting money set people free to live abundant, healthier lives and
                                make her a captivating, sought-after motivational speaker.
                            </p>

                            <h1>
                                Lady Simone
                            </h1>

                            <span className="span-tagline">
                                Author & Writer
                            </span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain;