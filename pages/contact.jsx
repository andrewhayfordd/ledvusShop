import Image from "next/image";
import Link from "next/link";
import contactBanner from "./img/1519216.webp";
function Contact(){
    return(
        <div className="Contact">
            <div className="container">

            <div className="banner">
              <div className="text">
                <h1>Contact us</h1>
                <p>Contact us here for more information</p>
              </div>
            </div>

            <main>
                <div className="container">
                    <div className="head">Get In Touch</div>

                    <div>
                        <form action="">
                            <input className="inputL" type="text" name="First_Name" placeholder="First Name" /><br/>
                            <input type="email" name="Email" placeholder="Enter Email" required/>
                            <input type="tel" name="Phone" placeholder="Enter Phone Number" required/><br/>
                            <input className="inputL" type="text" name="Subject" placeholder="Subject"/><br/>
                            <textarea name="Message" id="" cols="30" rows="10" placeholder="Message..."></textarea><br/>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

                <div className="contact_info">
                    <div className="head">Contact Information</div>
                    <div className="details">
                        <li><i className="fas fa-location-dot"/>&nbsp;&nbsp;&nbsp; Sleeknote ApS Ankersgade 12C, 1, 1800 Aarhus</li>
                        <li><i className="fas fa-phone"/>&nbsp;&nbsp;&nbsp; +233 5018 80091</li>
                        <li><i className="far fa-envelope"/>&nbsp;&nbsp;&nbsp; <Link href="#">aaryeetey12@gmail.com</Link></li>
                    </div>
                </div>
            </main>



            </div>


            <div className="socials">
                <Link href=""><li className="facebook"><i className="fab fa-facebook-f"></i><p>Facebook</p></li></Link>
                <Link href=""><li className="twitter"><i className="fab fa-twitter"></i><p>Twitter</p></li></Link>
                <Link href=""><li className="instagram"><i className="fab fa-instagram"></i><p>Instagram</p></li></Link>
                <Link href=""><li className="whatsapp"><i className="fab fa-whatsapp"></i><p>Whatsapp</p></li></Link>
            </div>
        </div>
    );
}
export default Contact;