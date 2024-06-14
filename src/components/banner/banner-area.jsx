import React from "react";
import Link from "next/link";
// internal
import { ArrowRight } from "@/svg";
import banner_1 from "@assets/img/banner/moel-insect-killer-product-banner.png";
import banner_2 from "@assets/img/banner/cri-cri-300-product-banner.png";

// banner item
function BannerItem({ sm = false, bg, title }) {
  return (
    <div
      className={`tp-banner-item ${
        sm ? "tp-banner-item-sm" : ""
      } tp-banner-height p-relative mb-30 z-index-1 fix`}
    >
      <div
        className="tp-banner-thumb include-bg transition-3"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="tp-banner-content">
        {!sm && <span>Sale 15% off all store</span>}
        <h3 className="tp-banner-title">
          <Link href="#">{title}</Link>
        </h3>
        {sm && <p>Sale 15% off</p>}
        <div className="tp-banner-btn">
          <Link href="#" className="tp-link-btn">
            Explore Now
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

const BannerArea = () => {
  return (
    <section className="tp-banner-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <BannerItem
              bg={banner_1}
              title={
                <>
                  Insect Killer <br /> Moel CRI ON
                </>
              }
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <BannerItem
              sm={true}
              bg={banner_2}
              title={
                <>
                  Insect Killer <br /> Moel CRI CRI 300
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerArea;
