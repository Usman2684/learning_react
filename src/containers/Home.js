import React from 'react';
import Featured_categories from '../components/Featured_categories';
import Flexbox from '../components/Flexbox';
import Footer from '../components/Footer';
import Topnav from '../components/Topnav';

const Home = () => (
    <div> 
    <div class="header">
        <div class="container">

            <div class="navbar">
                <div class="logo">
                    <img src="images/logo.png" />     {/*"i" */} 
                </div>
                <Topnav />
                <img src="images/cart.png" width="30px" height="30px" />
                <img src="images/menu.png" class="menu-icon" onclick="menutoggle()" />
            </div>
            <Flexbox />
        </div>
    </div>
    {/* <!-- Featured categories --> */}
    <Featured_categories />
    {/* <!-- Featured Products --> */}
    <div class="small-container">
        <h2 class="tittle">Featured Products</h2>
        <div class="row">
            <div class="col-4">
                <img src="images/product-1.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src={Image} />   {/* images/product-2.jpg */}
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-3.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-4.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>

        </div>
        <h2 class="tittle">Latest Produts</h2>
        <div class="row">
            <div class="col-4">
                <img src="images/product-5.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-6.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-7.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="col-4">
                <img src="images/product-8.jpg" alt="" />
                <h4>Red Printed T-Shirt</h4>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>
                <p>$50.00</p>
            </div>
            <div class="row">
                <div class="col-4">
                    <img src="images/product-9.jpg" alt="" />
                    <h4>Red Printed T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div class="col-4">
                    <img src="images/product-10.jpg" alt="" />
                    <h4>Red Printed T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div class="col-4">
                    <img src="images/product-11.jpg" alt="" />
                    <h4>Red Printed T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>
                <div class="col-4">
                    <img src="images/product-12.jpg" alt="" />
                    <h4>Red Printed T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <p>$50.00</p>
                </div>

            </div>

        </div>
    </div>
    {/* <!-- offer --> */}
    <div class="offer">

        <div class="small-container">
            <div class="row">
             <div class="col-2">
                <img src="images/exclusive.png" class="offer-img" />
             </div>
             <div class="col-2">
                <p>Exclusively Available on RedStore </p>
                <h1>Smart Band 4 </h1>
                <small>The Mi smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can </small>

                <a href="" class="btn">Buy Now &#8594;</a>
             </div>
            </div>
        </div>
    </div>
    {/* <!-- testimonial --> */}
    <div class="testimonial">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <i class="fa fa-quote-lef"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cupiditate tempore et cum quis consequuntur expedita! Adipisci animi totam nihil.</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <img src="images/user-1.png" alt="" />
                    <h3>Sean Parker</h3>
                </div>
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cupiditate tempore et cum quis consequuntur expedita! Adipisci animi totam nihil.</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <img src="images/user-2.png" alt="" />
                    <h3>Mike Smith</h3>
                </div>
                <div class="col-3">
                    <i class="fa fa-quote-lef"></i>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis cupiditate tempore et cum quis consequuntur expedita! Adipisci animi totam nihil.</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                    <img src="images/user-3.png" alt="" /> 
                    <h3>Mabel Joe</h3>
                </div>

            </div>
        </div>
    </div>
    {/* <!-- brands --> */}
    <div class="brands">

        <div class="small-container">
            <div class="row">
                <div class="col-5">
                    <img src="images/logo-godrej.png" alt="" />
                </div>
                <div class="col-5">
                    <img src="images/logo-oppo.png" alt="" />
                </div>
                <div class="col-5">
                    <img src="images/logo-coca-cola.png" alt="" />
                </div>
                <div class="col-5">
                    <img src="images/logo-paypal.png" alt="" />
                </div>
                <div class="col-5">
                    <img src="images/logo-philips.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    {/* <!-- footer --> */}
    <Footer />
    </div>
);

export default Home;