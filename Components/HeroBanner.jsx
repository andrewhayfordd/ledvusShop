import Link from "next/link";
import { urlFor } from "@/lib/client";


function HeroBanner({heroBanner}){
    return(
        <div className="HeroBanner">
            <img src={urlFor(heroBanner.image)} alt="" />
            <div className="container">
                <div className="text1">{heroBanner.smallText}</div>
                <div className="text2">{heroBanner.midText}</div>
                <div className="text3">{heroBanner.largeText1}</div>
                <Link href=""><button type="button">{heroBanner.buttonText}</button></Link>
                <div className="text4">
                    <div className="Description"><h1>Desciption</h1></div>
                    <div className="description"><p>{heroBanner.desc}</p></div>
                </div>
            </div>
        </div>
    );
}
export default HeroBanner;






