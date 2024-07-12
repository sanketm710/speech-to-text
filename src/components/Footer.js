import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import facebook from "../assets/facebook.jpg";
// import twitter from "../assets/twitter.jpg";
// import linkedin from "../assets/linkedin.jpg";
// import instagram from "../assets/instagram.jpg";
// import youtube from "../assets/youtube.jpg";
// import stl from "../assets/STLlogo.png";

const Footer = () => {
  return (
    <footer className="d-flex align-items-center justify-content-center">
      <div
        className=" d-flex footer-area rounded p-4 black-bg-2 fix align-items-center justify-content-center"
        style={{
          backgroundColor: "white",
          // border: "25px solid rgba(214,219,244,255)",
        }}
      >
        <div>
          <div className="row">
            <div>
              <div className="d-flex flex-coloumn align-items-center justify-content-center">
                <a className="standard-logo" href="https://stl.tech/">
                  {/* <img width="100px" src={stl} /> */}
                  <h1 className=" d-flex align-items-center justify-content-center">
                    🙏🙏🙏
                  </h1>
                </a>
              </div>
            </div>
            {/* <div className="col-md-6 col-xs-12 social-icons flex-wrap">
              <ul className="list-inline">
                <a
                  href="https://online.stl.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    width="100px"
                    src="https://online.stl.tech/cdn/shop/files/STL_Store-Logo-Color.png?v=1670822801&width=500"
                    className="img-responsive store_logo_img"
                    alt="STL"
                    style={{ marginTop: "30px" }}
                  />
                </a>
                <a href="https://www.facebook.com/STL-Sterlite-Technologies-Limited-105715490969006/">
                  <img
                    alt="facebook-logo"
                    src={facebook}
                    width="25px"
                    style={{
                      marginTop: "30px",
                      padding: "5px",
                      backgroundColor: "white",
                      marginLeft: "20px",
                    }}
                  />
                </a>

                <a href="https://twitter.com/STL_tech">
                  <img
                    alt="facebook-logo"
                    src={twitter}
                    width="25px"
                    style={{
                      marginTop: "30px",
                      padding: "5px",
                      backgroundColor: "white",
                      marginLeft: "20px",
                    }}
                  />
                </a>

                <a href="https://www.instagram.com/stl.tech/">
                  <img
                    alt="facebook-logo"
                    src={instagram}
                    width="25px"
                    style={{
                      marginTop: "30px",
                      padding: "5px",
                      backgroundColor: "white",
                      marginLeft: "20px",
                    }}
                  />
                </a>
                <a href="https://www.linkedin.com/company/sterlite-technologies-ltd-/">
                  <img
                    alt="facebook-logo"
                    src={linkedin}
                    width="25px"
                    style={{
                      marginTop: "30px",
                      padding: "5px",
                      backgroundColor: "white",
                      marginLeft: "20px",
                    }}
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCZFZ0whG9iCj6GErP3hrtBw">
                  <img
                    alt="facebook-logo"
                    src={youtube}
                    width="25px"
                    style={{
                      marginTop: "30px",
                      padding: "3px",
                      backgroundColor: "white",
                      marginLeft: "20px",
                    }}
                  />
                </a>
              </ul>
            </div>*/}
          </div>
        </div>
        {/* <div className="">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"> */}
        {/* <div
                  id="nav_menu-13"
                  className="footer__widget footer-3-widget footer-col-3-1 mb-50 widget_nav_menu"
                >
                  <h5
                    className="footer__widget-title"
                    style={{ marginTop: "30px", color: "white" }}
                  >
                    Industries
                  </h5>
                  <div className="menu-industries-container">
                    <ul id="menu-industries" className="menu">
                      <li
                        id="menu-item-85508"
                        className="menu-item menu-item-type-post_type menu-item-object-industries menu-item-85508"
                      >
                        <a href="https://stl.tech/telcos/">Telcos</a>
                      </li>
                      <li
                        id="menu-item-85509"
                        className="menu-item menu-item-type-post_type menu-item-object-industries menu-item-85509"
                      >
                        <a href="https://stl.tech/cloud/">Cloud Co.</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                <div
                  id="nav_menu-14"
                  className="footer__widget footer-3-widget footer-col-3-2 mb-50 widget_nav_menu"
                >
                  <h5
                    className="footer__widget-title"
                    style={{ marginTop: "30px", color: "white" }}
                  >
                    Solutions
                  </h5>
                  <div className="menu-solutions-container">
                    <ul id="menu-solutions" className="menu">
                      <li
                        id="menu-item-160300"
                        className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-160300"
                      >
                        <a href="https://stl.tech/solutions/estelan/">
                          Enterprise LAN Solutions
                        </a>
                      </li>
                      <li
                        id="menu-item-160301"
                        className="menu-item menu-item-type-post_type menu-item-object-optical-interconnect menu-item-160301"
                      >
                        <a href="https://stl.tech/optical-interconnect-products/access-network-distribution-solutions/">
                          Access Network Distribution Solutions
                        </a>
                      </li>
                      <li
                        id="menu-item-160302"
                        className="menu-item menu-item-type-post_type menu-item-object-solutions current-menu-item menu-item-160302"
                      >
                        <a
                          href="https://stl.tech/solutions/neox/"
                          aria-current="page"
                        >
                          NEOX &#8211; Communication Platform
                        </a>
                      </li>
                      <li
                        id="menu-item-160303"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-160303"
                      >
                        <a href="https://online.stl.tech/">
                          STL STORE &#8211; Shop Now
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                <div
                  id="nav_menu-11"
                  className="footer__widget footer-3-widget footer-col-3-3 mb-50 widget_nav_menu"
                >
                  <h5
                    className="footer__widget-title"
                    style={{ marginTop: "30px", color: "white" }}
                  >
                    Portfolio
                  </h5>
                  <div className="menu-portfolio-container">
                    <ul id="menu-portfolio" className="menu">
                      <li
                        id="menu-item-85531"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85531"
                      >
                        <a href="https://stl.tech/global-services/">
                          Global Services
                        </a>
                      </li>
                      <li
                        id="menu-item-85532"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85532"
                      >
                        <a href="https://stl.tech/optical-interconnect/">
                          Optical Networking
                        </a>
                      </li>
                      <li
                        id="menu-item-85533"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85533"
                      >
                        <a href="https://stldigital.tech/">
                          Digital and Technology Solutions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div
                  id="nav_menu-12"
                  className="footer__widget footer-3-widget footer-col-3-4 mb-50 widget_nav_menu"
                >
                  <h5
                    className="footer__widget-title"
                    style={{ marginTop: "30px", color: "white" }}
                  >
                    Insight
                  </h5>
                  <div className="menu-insights-container">
                    <ul id="menu-insights" className="menu">
                      <li
                        id="menu-item-85534"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85534"
                      >
                        <a href="https://stl.tech/events/">Events</a>
                      </li>
                      <li
                        id="menu-item-16186"
                        className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-16186"
                      >
                        <a href="https://stl.tech/blog/">Blog</a>
                      </li>
                      <li
                        id="menu-item-85535"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85535"
                      >
                        <a href="https://stl.tech/newsletter/">Newsletters</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-8 col-sm-8 widg-four">
                <div
                  id="nav_menu-15"
                  className="footer__widget footer-3-widget footer-col-3-5 mb-50 widget_nav_menu"
                >
                  <div className="menu-contact-us-container">
                    <ul id="menu-contact-us" className="menu">
                      <li
                        id="menu-item-85536"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85536"
                      >
                        <a
                          href="https://stl.tech/about-us/"
                          style={{ marginTop: "70px" }}
                        >
                          About Us
                        </a>
                      </li>
                      <li
                        id="menu-item-85537"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-85537"
                      >
                        <a href="https://stl.tech/management/">Management</a>
                      </li>
                      <li
                        id="menu-item-85538"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85538"
                      >
                        <a href="https://stl.tech/esg/">ESG</a>
                      </li>
                      <li
                        id="menu-item-85539"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85539"
                      >
                        <a href="https://stl.tech/contact-us/">Contact Us</a>
                      </li>
                      <li
                        id="menu-item-85540"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85540"
                      >
                        <a href="https://stl.tech/life/">Life</a>
                      </li>
                      <li
                        id="menu-item-16185"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16185"
                      >
                        <a href="https://stl.tech/investor/">Investors</a>
                      </li>
                      <li
                        id="menu-item-16184"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16184"
                      >
                        <a href="https://stl.tech/newsroom/">Newsroom</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <div className="footer__copyright">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer__copyright-text text-center">
                  <div
                    id="footer-copyright-top"
                    className="footer-copyright-top"
                  >
                    <div className="menu-copyright-menu-container">
                      <ul id="menu-copyright-menu" className="menu">
                        <li
                          id="menu-item-85543"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85543"
                        >
                          <a href="https://stl.tech/terms-of-use/">
                            Terms Of Use
                          </a>
                        </li>
                        <li
                          id="menu-item-85542"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85542"
                        >
                          <a href="https://stl.tech/code-of-conduct-and-policies/">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    <span style={{ color: "blue" }}>
                      © 2022-23 <a href="https://www.stl.tech">STL Tech</a> All
                      Rights Reserved.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
