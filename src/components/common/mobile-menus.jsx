import React from "react";
import Link from "next/link";
import { mobile_menu } from "@/data/menu-data";
import ProductItem from "../products/electronics/product-item";
import ErrorMsg from "./error-msg";
import { HomeNewArrivalPrdLoader } from "../loader";
import { useGetProductTypeQuery } from "@/redux/features/productApi";

const MobileMenus = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({
    type: "electronics",
    query: "new=true",
  });

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeNewArrivalPrdLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }

  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }

  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;

    content = (
      <div className="row">
        {product_items.slice(0, 4).map((item) => (
          <div key={item._id} className="col-md-3">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    );
  } else {
    // If there are no products or an error occurs, set content to an empty array
    content = [];
  }

  return (
    <>
      <nav className="tp-main-menu-content">
        {mobile_menu.map((menu, i) => (
          <ul key={i}>
            <li key={menu.id}>
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </>
  );
};

export default MobileMenus;
