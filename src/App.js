import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fifteen: 0,
        }

    }

    componentDidMount = () => {
        this.id = setInterval(() => {
            this.setState(a => ({
                fifteen: a.fifteen + 2,
            }))
        }, 200);
    }



    render() {
        return (
            <>
                {/* header section start here */}
                <section id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className='navbar navbar-light navbar-expand-lg '>
                                    <a href=""><img src={process.env.PUBLIC_URL + "/logo.png"} alt="My-Pic" /></a>
                                    <button class="navbar-toggler bg-white">
                                        <span class="navbar-toggler-icon" data-toggle="collapse" data-target="#mynavbar"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="mynavbar">

                                        <ul className='navbar-nav ml-5 '>
                                            <li className='nav-item '><a href="" className='nav-link'>Home</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>About</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>Activities</a></li>
                                            <li className='nav-item'>
                                                <a href="" className='nav-link ' id='navbar-dropdown' data-toggle="dropdown">Pages <i className='fa fa-chevron-down'></i></a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="#">Extreme Team</a>
                                                    <a class="dropdown-item" href="#">RTL Tested</a>

                                                </div>
                                            </li>
                                            <li className='nav-item'>
                                                <a href="" className='nav-link ' id='navbar-dropdown' data-toggle="dropdown">Blog <i className='fa fa-chevron-down'></i></a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="#">Blog Full Width</a>
                                                    <a class="dropdown-item" href="#">Blog Left Sidebar</a>
                                                    <a class="dropdown-item" href="#">Blog Right Sidebar</a>
                                                    <a class="dropdown-item" href="#">Blog is Here</a>

                                                </div>
                                            </li>
                                            <li className='nav-item'>
                                                <a href="" className='nav-link ' id='navbar-dropdown' data-toggle="dropdown">Contact <i className='fa fa-chevron-down'></i></a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a class="dropdown-item" href="#">Contact Layout 1</a>
                                                    <a class="dropdown-item" href="#">Contact Layout 2</a>

                                                </div>
                                            </li>

                                        </ul>
                                        <div className="icons d-none d-lg-block">
                                            <i className='fa fa-facebook'></i>
                                            <i className='fa fa-twitter'></i>
                                            <i className='fa fa-youtube'></i>
                                            <i className='fa fa-pinterest-p'></i>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home">
                 <Carousel>
                        <Carousel.Item>
                        <img src={process.env.PUBLIC_URL + "/slider1.jpg"} class="d-block w-100" alt="..." />
                                <div id="home-slider" class="carousel-caption ">
                                    <h2>Extreme</h2>
                                    <h1>Board Suffering</h1>
                                    <p >Aendrerit eu ipsum. Nunc eleifend nulla tortoridie vehi</p>
                                    <button className='btn '>Read More</button>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={process.env.PUBLIC_URL + "/slider2.jpg"} class="d-block w-100" alt="..." />
                                <div id="home-slider" class="carousel-caption ">
                                    <h2>Extreme</h2>
                                    <h1>Mountain Biking</h1>
                                    <p >Aendrerit eu ipsum. Nunc eleifend nulla tortoridie vehi</p>
                                    <button className='btn '>Read More</button>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={process.env.PUBLIC_URL + "/slider3.jpg"} class="d-block w-100" alt="..." />
                                <div id="home-slider" class="carousel-caption ">
                                    <h2>Extreme</h2>
                                    <h1>Snow Sports</h1>
                                    <p >Aendrerit eu ipsum. Nunc eleifend nulla tortoridie vehi</p>
                                    <button className='btn '>Read More</button>
                                </div>
                        </Carousel.Item>
                 </Carousel>
                </section>
                <div className="home-bottom">
                    <img src={process.env.PUBLIC_URL + "/extreme-sport-top-img.png"} alt="My-Pic" width="100%" />
                </div>

                <section id="hiking">
                    <div className="container mt-5">
                        <div className="row text-center gx-3">
                            <div className="col-lg-2 col-md-4 mt-5 ">
                                <div className=' shadow px- py-3'> 
                                  <img src={process.env.PUBLIC_URL + "/camping-icon.png"} alt="" width="80px" />
                                    <h2>Campaing</h2></div>
                            </div>
                            <div className="col-lg-2 col-md-4 mt-5 ">
                                <div className=' shadow px- py-3'>   <img src={process.env.PUBLIC_URL + "/hiking-icon.png"} alt="" width="70px" />
                                    <h2>Hiking</h2></div>
                            </div>
                            <div className="col-lg-2 col-md-4 mt-5 ">
                                <div className=' shadow px- py-3'>   <img src={process.env.PUBLIC_URL + "/beach-tours-icon.png"} alt="" width="80px" />
                                    <h2>Beach</h2></div>
                            </div>
                            <div className="col-lg-2 col-md-4 mt-5 ">
                                <div className=' shadow px- py-3'>   <img src={process.env.PUBLIC_URL + "/safari-icon.png"} alt="" width="80px" />
                                    <h2>Safari</h2></div>
                            </div>
                            <div className="col-lg-2 col-md-4 mt-5 ">
                                <div className=' shadow px- py-3'>   <img src={process.env.PUBLIC_URL + "/surfing-icon.png"} alt="" width="80px" />
                                    <h2>Surfing</h2></div>
                            </div>
                            <div className="col-lg-2 col-md-4 mt-5 ">
                                <div className=' shadow px- py-3'>   <img src={process.env.PUBLIC_URL + "/cycling-icon.png"} alt="" width="80px" />
                                    <h2>Cycling</h2></div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="welcome">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={process.env.PUBLIC_URL + "/welcome-section-img.png"} alt="" width="100%" />
                            </div>
                            <div className="col-md-6 pl-5">
                                <h3>Welcome</h3>
                                <h1>Exterme</h1>
                                <h2>Sports</h2>
                                <p>Aendrerit eu ipsum. Nunc eleifend nulla tortoridie vehi
                                    quam iaculis at. Morbi auctor bibenduy tinci cursuste augue egestas sapien faucibus.</p>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div id="activity">
                                            <div className="row">
                                                <div id='circle' className="col-md-6">
                                                    <h2>10+</h2>
                                                </div>
                                                <div className="col-md-6 mt-4">
                                                    <h4>Sports</h4>
                                                    <h4>Activities</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div id="activity">
                                            <div className="row">
                                                <div id='circle' className="col-md-6">
                                                    <h2>15+</h2>
                                                </div>
                                                <div className="col-md-6 mt-4">
                                                    <h4>Years Of </h4>
                                                    <h4>Experience</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <button className='btn '>Read More</button>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="activities">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Extreme</h3>
                                <h1>Activities</h1>
                            </div>
                            <div className="col-lg-3 col-md-5 offset-lg-5 offset-md-3">
                                <button className='btn shadow'>View All Activities</button>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/activities-img1.jpg"} alt="My-Pic" width="100%" />
                                        <h4 className='up'>Mountain Biking</h4>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <img src={process.env.PUBLIC_URL + "/activities-img2.jpg"} alt="My-Pic" width="100%" />
                                                <h4 className='up'>Snow Sports</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <img src={process.env.PUBLIC_URL + "/activities-img3.jpg"} alt="My-Pic" width="100%" />
                                                <h4 className='up'>Surfing</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-5">
                                            <div className="card">
                                                <img src={process.env.PUBLIC_URL + "/activities-img4.jpg"} alt="My-Pic" width="100%" />
                                                <h4 className='up'>Skateboarding</h4>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mt-5">
                                            <div className="card">
                                                <img src={process.env.PUBLIC_URL + "/activities-img5.jpg"} alt="My-Pic" width="100%" />
                                                <h4 className='up'>Jet Skiing</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="extreme-top">
                    <img src={process.env.PUBLIC_URL + "/extreme-sport-top-img.png"} alt="My-Pic" width="100%" />
                </div>
                <section id="extreme">
                    <div className="container-fluid mt-5">
                        <div className="row text-center">
                            <div className="col">
                                <h1>Extreme Sports</h1>
                                <h2> Will Test Your Limits and Push the Boundaries to the Max</h2>
                                <button className='btn'>Join The Club</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reasons">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2>Reasons to Join us </h2>
                                <h1>Extreme Sports</h1>
                            </div>
                            <div className="row gx-3 mt-5">
                                <div className="col-lg-2 col-md-3 col-sm-4 offset-lg-1">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/team-of-icon.png"} alt="My-Pic" />
                                        <div className="card-body">
                                            <h4>Team of Passionate</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4  ">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/train-your-body-icon.png"} alt="My-Pic" />
                                        <div className="card-body">
                                            <h4>Train Your Body to Perform</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4  ">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/Sport-icon.png"} alt="My-Pic" />
                                        <div className="card-body">
                                            <h4>Sport Grounds</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4  ">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/improve-your-icon.png"} alt="My-Pic" />
                                        <div className="card-body">
                                            <h4>Improve Your Skills</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4  ">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/Relax-Enjoy-icon.png"} alt="My-Pic" />
                                        <div className="card-body">
                                            <h4>Relax & Enjoy Extreme Activities</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="feedback">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={process.env.PUBLIC_URL + "/Feedback-left-img.jpg"} alt="My-Pic" width="100%" />
                            </div>
                            <div className="col-md-6 b">
                                <h3>Clients</h3>
                                <h1>Feedback</h1>


                                <div className="col-md-12 shadow mt-5 p-5">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <Carousel>
                                            <Carousel.Item>
                                            <p>Sed ut perspicitis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiaeaque ipsa quaei ab illo inventore veritatiset quasi.</p>
                                            <div className="col-lg-6 d-flex mt-5 col-10">
                                                    <div className="col-sm-4">
                                                        <img src={process.env.PUBLIC_URL + "/team-member1.jpg"} alt="Mu-Pic" width="100%" />
                                                    </div>
                                                    <div className="col-sm-6 ml-4">
                                                        <h4>Smith Doe</h4>
                                                        <p>Instructor</p>
                                                    </div>
                                                    </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <p>Sed ut perspicitis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiaeaque ipsa quaei ab illo inventore veritatiset quasi.</p>
                                            <div className="col-lg-6 d-flex mt-5 col-10">
                                                    <div className="col-sm-5">
                                                        <img src={process.env.PUBLIC_URL + "/team-member2.jpg"} alt="Mu-Pic" width="100%" />
                                                    </div>
                                                    <div className="col-sm-6 ml-4">
                                                        <h4>Jonathon</h4>
                                                        <p>CEO</p>
                                                    </div>
                                                    </div>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                            <p>Sed ut perspicitis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiaeaque ipsa quaei ab illo inventore veritatiset quasi.</p>
                                                <div className="col-lg-6 d-flex mt-5 col-10">
                                                    <div className="col-sm-5">
                                                        <img src={process.env.PUBLIC_URL + "/testimonials-img.png"} alt="Mu-Pic" width="100%" />
                                                    </div>
                                                    <div className="col-sm-6 ml-4">
                                                        <h4>Jonathon Doe</h4>
                                                        <p>Founder</p>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        </Carousel>
                                      
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sports ">
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-md-4 p-0">
                                <img src={process.env.PUBLIC_URL + "/sport-step1.jpg"} alt="My-Pic" width="100%" />
                                     <div className="king">
                                         <h3>Sports Videos</h3>
                                         <p>Get Inspired</p>
                                     </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <img src={process.env.PUBLIC_URL + "/sport-step2.jpg"} alt="My-Pic" width="100%" />
                                <div className="king">
                                         <h3>Club Activities</h3>
                                         <p>View All Sports</p>
                                     </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <img src={process.env.PUBLIC_URL + "/sport-step3.jpg"} alt="My-Pic" width="100%" />
                                <div className="king">
                                         <h3>Our Team</h3>
                                         <p>Instructors</p>
                                     </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>From the Blog</h2>
                                <h1>Extreme News</h1>
                            </div>
                            <div className="col-md-4">
                                <div className="tex">
                                    <h4>24 Dec 2021</h4>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/blog-img1.jpg"} alt="My-Pic" width="100%" />
                            </div>
                            <div className="col-md-4">
                                <div className="tex">
                                    <h4>24 Dec 2021</h4>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/blog-img2.jpg"} alt="My-Pic" width="100%" />
                            </div>
                            <div className="col-md-4">
                                <div className="tex">
                                    <h4>24 Dec 2021</h4>
                                </div>
                                <img src={process.env.PUBLIC_URL + "/blog-img3.jpg"} alt="My-Pic" width="100%" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="climbing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <p>By Extremesports1</p>
                                <h2>Climbing Adventures Across the World</h2>
                            </div>
                            <div className="col-md-4">
                                <p>By Extremesports1</p>
                                <h2>Climbing Adventures Across the World</h2>
                            </div>
                            <div className="col-md-4">
                                <p>By Extremesports1</p>
                                <h2>Climbing Adventures Across the World</h2>
                            </div>
                            <div id="logo">
                                <div className="row mt-5 p-2">
                                    <div className="col-md-2 col-sm-4">
                                        <img src={process.env.PUBLIC_URL + "/bottom-logo-1.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <img src={process.env.PUBLIC_URL + "/bootom-logo-2.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <img src={process.env.PUBLIC_URL + "/bootom-logo-3.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <img src={process.env.PUBLIC_URL + "/bottom-logo-4.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <img src={process.env.PUBLIC_URL + "/bottom-logo-5.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="col-md-2 col-sm-4">
                                        <img src={process.env.PUBLIC_URL + "/bottom-logo-1.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div id="footer-top-img">
                    <img src={process.env.PUBLIC_URL + "/footer-wave-img.png"} alt="My-Pic" width="100%" />
                </div>
                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-4">
                                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="My-Pic" width="100%" />
                            </div>
                            <div className="col-lg-4 offset-lg-6  col-md-7 offset-md-2">
                                <i className='fa fa-facebook'></i>
                                <i className='fa fa-twitter'></i>
                                <i className='fa fa-instagram'></i>
                                <i className='fa fa-youtube'></i>
                                <i className='fa fa-linkedin'></i>
                            </div>
                            <hr className='bg-white mt-5' />
                            <div className="row">
                                <div className="col-md-3">
                                    <h1>Extreme Sports</h1>
                                    <p className='mt-4 ml-4'>Suspendisse interdum, nisi nec effiitur auctor, odio lcongue ligula, se sodales tortor turpis at elit. Aliquam iacipsum ut odio variusid interdum lac dictum. Mauris a maximusey dolovestibulumorbi non.</p>
                                </div>
                                <div className="col-md-3">
                                    <h1>Activities</h1>
                                    <ul className='navbar-nav mt-4 ml-4'>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i>  Mountain Biking</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i>  Snow Sports</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i>  Surfing</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i>  Skateboarding</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i>  Jet Skilling</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i>  Ice Climbing</a></li>
                                    </ul>
                                </div>
                                <div id='quick-links' className="col-md-3">
                                    <h1>Quick Links</h1>
                                    <ul className='navbar-nav mt-4 ml-4'>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i> Home</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i> About</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i> Activities</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i> Team</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i> Blog</a></li>
                                        <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right mr-2'></i> Contact</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h1>Contact Info</h1>
                                    <address className='mt-4 ml-4'>Street 238,52 tempor
                                        Donec ultricies mattis nulla
                                        risus tristique ut.</address>
                                    <p>Phone:    +92 303 00 00 000</p>
                                    <p>Email: dogar14@gmail.com</p>
                                </div>
                            </div>
                            <hr className='bg-white mt-5' />
                            <footer className='mt-5'>Copyright &copy; basharatalidogar14@gmail.com All Right Reversed!</footer>
                        </div>

                    </div>

                </section>
                <div className="container">

                </div>





            </>
        )
    }
}
