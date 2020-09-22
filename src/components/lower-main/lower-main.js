import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../../static/books/Book_Cover.png'
import { MDBMask, MDBView } from "mdbreact";

const UpperMain = () => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="content-wraps">
                            <h1>About The Book</h1>

                            <p>
                                Mariah is a young single mother searching to hid herself,
                                love, and enlightenment. She meets the eccentric old Reverend Blake,
                                the preacher of an old abandoned haunted-looking castle church in Boorklyn,
                                Mariah finds herself drawn to the reverend light amid chaos, confusion,
                                despair, pressure and pain.
                            </p>

                            <button>
                                <Link to="/about-the-book">Read More</Link>
                            </button>

                        </div>

                        <MDBView className="rounded z-depth-0 mb-lg-0 mb-4" hover waves>
                            <img
                                className="img-fluid rounded"
                                src={FrontBook}
                                alt=""
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain