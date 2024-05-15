// ... React modules
// import { Link } from "react-router-dom";
// import { useContext } from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaWrench,
} from "react-icons/fa";
// import { FaWrench, FaHandPaper, FaPencilAlt } from "react-icons/fa";

// ... Context

// ... Components
import AutoWriteText from "@components/config/AutoWriteText";
import HandHoldPenSvg from "@components/svg_icons/HandHoldPenSvg";

import ButtonDownloadCV from "@components/buttons/ButtonDownloadCV";
import ButtonStar from "@components/buttons/ButtonStar";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const HeroSection = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <section id="hero_section" className="p-0">
      <div className="hero_section_container">
        <div className="brand_container text-center">
          {/* Brand */}
          <h2 className="fw-bolder text_secondary_1 display-2">
            <span className="brand_name_highlight"> &#123; Jhay</span>
            Ph
            <span className="brand_name_highlight">
              <FaWrench className="brand_wrench" />
            </span>
            x <span className="brand_name_highlight"> &#125; </span>
          </h2>

          {/* AutoRight text */}
          <h2
            className="my-3 fw-semibold text_secondary_1"
            style={{ height: "2.5rem" }}
          >
            A <AutoWriteText />
            {/* <FaPencilAlt className="brand_pencil_write" /> */}
            <HandHoldPenSvg />
            <span className=""></span>
          </h2>

          {/* Hero icons container */}
          <div className="hero_social_icons_container mb-5">
            <a
              href="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              className="social_link text_whatsapp"
            >
              <FaWhatsapp className="social_icon" />
            </a>

            <a
              href="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              className="social_link text_twitter"
            >
              <FaTwitter className="social_icon" />
            </a>

            <a
              href="https://github.com/jhayphix"
              target="_blank"
              rel="noreferrer"
              className="social_link text_secondary_1"
            >
              <FaGithub className="social_icon" />
            </a>

            <a
              href="https://wa.me/233248359918?text=Hello Jhay, I need your service!!"
              target="_blank"
              rel="noreferrer"
              // className="social_link text_primary_color_1"
              className="social_link text_facebook"
            >
              <FaFacebook className="social_icon" />
            </a>
          </div>

          {/* Action buttons */}
          <div className="hero_btn_container d-flex align-items-center justify-content-center">
            <a href="#portfolio-section" className="me-4">
              <ButtonStar btn_text="Explore" />
            </a>

            <ButtonDownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
