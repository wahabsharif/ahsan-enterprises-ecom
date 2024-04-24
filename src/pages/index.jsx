import BannerArea from "@/components/banner/banner-area";
// import BlogArea from "@/components/blog/electronic/blog-area";
// import ElectronicCategory from "@/components/categories/electronic-category";
import CtaArea from "@/components/cta/cta-area";
import FeatureArea from "@/components/features/feature-area";
import BannerSlider from "@/components/home/banner-slider";
import InstagramArea from "@/components/instagram/instagram-area";
import NewArrivals from "@/components/products/electronics/new-arrivals";
// import OfferProducts from "@/components/products/electronics/offer-products";
import ProductArea from "@/components/products/electronics/product-area";
import ProductBanner from "@/components/products/electronics/product-banner";
import ProductGadgetArea from "@/components/products/electronics/product-gadget-area";
// import ProductSmArea from "@/components/products/electronics/product-sm-area";
import SEO from "@/components/seo";
import Footer from "@/layout/footers/footer";
import Header from "@/layout/headers/header";
import Wrapper from "@/layout/wrapper";

const HomeFour = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Ahsan Enterprises" />
      <Header />
      <BannerSlider />
      {/* <ElectronicCategory /> */}
      <FeatureArea />
      <ProductArea />
      <BannerArea />
      {/* <OfferProducts /> */}
      <ProductGadgetArea />
      <ProductBanner />
      <NewArrivals />
      {/* <ProductSmArea /> */}
      {/* <BlogArea /> */}
      <InstagramArea />
      <CtaArea />
      <Footer />
    </Wrapper>
  );
};

export default HomeFour;
