import React from "react";
import menu_data from "@/data/menu-data";
import Link from "next/link";
import Image from "next/image";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { HomeNewArrivalPrdLoader } from "@/components/loader";
import ErrorMsg from "@/components/common/error-msg";
import ProductItem from "@/components/products/electronics/product-item";

// internal
import insta_1 from "@assets/img/instagram/insta.jpg";
import insta_3 from "@assets/img/instagram/insta.jpg";
import insta_4 from "@assets/img/instagram/insta.jpg";
import insta_6 from "@assets/img/instagram/insta.jpg";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.instagram.com/ahsansenterprises/", img: insta_1 },
  { id: 2, link: "https://www.instagram.com/ahsansenterprises/", img: insta_3 },
  { id: 3, link: "https://www.instagram.com/ahsansenterprises/", img: insta_4 },
  { id: 4, link: "https://www.instagram.com/ahsansenterprises/", img: insta_6 },
];
const Menus = () => {
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
    <ul>
      {menu_data.map((menu) =>
        menu.homes ? (
          <li key={menu.id} className="has-dropdown has-mega-menu">
            <Link href={menu.link}>{menu.title}</Link>
            <div className="home-menu tp-submenu tp-mega-menu">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
                {instagram_data.map((item, i) => (
                  <div className="col" key={i}>
                    <div className="tp-instagram-item-2 w-img">
                      <Image
                        src={item.img}
                        alt="instagram img"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <div className="tp-instagram-icon-2">
                        <a
                          href={item.link}
                          target="_blank"
                          className="popup-image"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <OfferCouponArea/> */}
            </div>
          </li>
        ) : (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Menus;
