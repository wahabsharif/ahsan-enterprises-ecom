import React from "react";
// internal
import SEO from "@/components/seo";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import ErrorMsg from "@/components/common/error-msg";
import { useGetProductQuery } from "@/redux/features/productApi";
import ProductDetailsBreadcrumb from "@/components/breadcrumb/product-details-breadcrumb";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import PrdDetailsLoader from "@/components/loader/prd-details-loader";

const ProductDetailsPageWithVideo = () => {
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductQuery("641e887d05f9ee1717e134b2");
  // decide what to render
  let content = null;
  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && product) {
    content = (
      <>
        <ProductDetailsBreadcrumb
          category={product.category.name}
          title={product.title}
        />
        <ProductDetailsArea productItem={product} />
      </>
    );
  }
  return (
    <Wrapper>
      <SEO pageTitle="Product Details" />
      <Header />
      {content}
      <Footer />
    </Wrapper>
  );
};

export default ProductDetailsPageWithVideo;
