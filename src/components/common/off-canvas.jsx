import Link from "next/link";
import Image from "next/image";
// internal
import { CloseTwo } from "@/svg";
import logo from "@assets/img/logo/ae-logo-dark.svg";
import contact_img from "@assets/img/icon/contact.png";
import MobileMenus from "./mobile-menus";
import social_data from "@/data/social-data";

const OffCanvas = ({ isOffCanvasOpen, setIsCanvasOpen }) => {
  return (
    <>
      <div
        className={`offcanvas__area offcanvas__radius ${
          isOffCanvasOpen ? "offcanvas-opened" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={() => setIsCanvasOpen(false)}
              className="offcanvas__close-btn offcanvas-close-btn"
            >
              <CloseTwo />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-70 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            {/* <div className="offcanvas__category pb-40">
              <button
                onClick={() => setIsCategoryActive(!isCategoryActive)}
                className="tp-offcanvas-category-toggle"
              >
                <i className="fa-solid fa-bars"></i>
                All Categories
              </button>
              <div className="tp-category-mobile-menu">
                <nav
                  className={`tp-category-menu-content ${
                    isCategoryActive ? "active" : ""
                  }`}
                >
                  <MobileCategory
                    categoryType={categoryType}
                    isCategoryActive={isCategoryActive}
                  />
                </nav>
              </div>
            </div> */}
            <div className="tp-main-menu-mobile fix d-lg-none mb-40">
              <MobileMenus />
            </div>

            <div className="offcanvas__contact align-items-center d-none">
              <div className="offcanvas__contact-icon mr-20">
                <span>
                  <Image src={contact_img} alt="contact_img" />
                </span>
              </div>
              <div className="offcanvas__contact-content">
                <h3 className="offcanvas__contact-title">
                  <a href="tel:098-852-987">004524865</a>
                </h3>
              </div>
            </div>
            <div className="offcanvas__btn">
              <Link href="/contact" className="tp-btn-2 tp-btn-border-2">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="tp-footer-social">
            {social_data.map((s) => (
              <a href={s.link} key={s.id} target="_blank">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* body overlay start */}
      <div
        onClick={() => setIsCanvasOpen(false)}
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
      ></div>
      {/* body overlay end */}
    </>
  );
};

export default OffCanvas;
