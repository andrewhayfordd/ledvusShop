import Link from "next/link";

import { urlFor } from "@/lib/client"

const FooterBanner = ({ footerBanner }) => {
    return(
        <div className="Footer">
            <div className="container">

                <div className="content">
                    <div className="logo"><h2>LED<span>VUS</span></h2></div>

                    
                        <div className="contact">
                            <div><i className="fas fa-map-marker-alt"></i> 140 City Boulevard, Partrick Streat, CA 87152</div>
                            <div><i className="fas fa-phone"></i> Phone: +44 249343434</div>
                            <div><i className="fas fa-envelope"></i> Email: support@levus.com</div>
                        </div>
                

                    <div className="socialmedia">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </div>
                </div>

                <div className="content2">
                    <div className="head">Quick Links</div>

                    <div className="links">
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">FAQ's</a></li>
                    </div>
                </div>

                <div className="content3">
                    <div className="head">Recent Post</div>

                    <div className="posts">
                        <div className="post">The Most Popular New Top Business App</div>
                        <div className="date">26 FEB 2019</div>

                        <div className="post">The Best Marketing Top Management Tools</div>
                        <div className="date">27 FEB 2019</div>

                        <div className="post">3 WooCommerce Plugins Boost Sales</div>
                        <div className="date">28 FEB 2019</div>
                    </div>
                </div>

        
            </div>

            <div className="end">
                <p>Copyright © 2023 Developed by IDEACO-All rights reserved.</p>
            </div>
        </div>
    )
}
export default FooterBanner;