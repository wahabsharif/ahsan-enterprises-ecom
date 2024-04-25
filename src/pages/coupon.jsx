import React from "react";
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CouponArea from "@/components/coupon/coupon-area";

const CouponPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Coupon" />
      <Header />
      <CommonBreadcrumb title="Grab Best Offer" subtitle="Coupon" />
      <CouponArea />
      <Footer />
    </Wrapper>
  );
};

export default CouponPage;
