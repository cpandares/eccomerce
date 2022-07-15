import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: { discount, largeText1, largeText2, saleTime,buttonText, image,smallText, midText,desc,product },
}) => {
  return (
    <div className="footer-banner-container animate animate__animated animate__fadeIn">
      <div className="banner-desc">
        <div className="left">
          <p>{discount} off</p>
          <h3>{largeText1}</h3>
          <h3> {largeText2} </h3>
         
        </div>
        <div className="right">
            <p>{ smallText }</p>
            <h3> {midText} </h3>
            <p>{ desc }</p>
            <Link href={`product/${product}`} >
                <button type="button">
                    { buttonText }
                </button>
            </Link>
        </div>
            <img src={urlFor(image)} className="footer-banner-image"/>
      </div>
    </div>
  );
};

export default FooterBanner;
