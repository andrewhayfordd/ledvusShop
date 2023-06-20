import Link from "next/link";

function Ffooter(){

    return(
        <div className="Ffooter">
            <div className="container">
                <div className="menu">
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">Contact</Link></li>
                    <li><Link href="">Terms</Link></li>
                    <li><Link href="">Policy</Link></li>
                    <li><Link href="">FAQs</Link></li>
                </div>

                <div className="Footer-footer">
                    <div className="copy-right">Copyright © 2023 Developed by IDEACO-All rights reserved.</div>
                    <div className="socials">
                        <li><Link href=""><i className="fab fa-facebook"></i></Link></li>
                        <li><Link href=""><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href=""><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href=""><i className="fab fa-whatsapp"></i></Link></li>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ffooter;