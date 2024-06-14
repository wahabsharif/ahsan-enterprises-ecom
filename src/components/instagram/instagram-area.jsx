import React from "react";
import Image from "next/image";
// internal
import ins_1 from "@assets/img/instagram/dont-just-survive-monday-thrive-on-it-light-a-fire-under-your-dreams-and-watch-this-week-transform.jpg";
import ins_2 from "@assets/img/instagram/every-accomplishment-starts-with-the-decision-to-try-take-that-first-step-toward-your-goals-today.jpg";
import ins_3 from "@assets/img/instagram/let-your-determination-be-the-fuel-that-propels-you-towards-your-wildest-dreams.jpg";
import ins_4 from "@assets/img/instagram/seize-the-day-this-monday-and-let-your-actions-speak-louder-than-words.jpg";
import ins_5 from "@assets/img/instagram/start-your-monday-with-ambition-and-step-into-a-realm-of-endless-possibilities.jpg";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.instagram.com/ahsansenterprises/", img: ins_1 },
  { id: 2, link: "https://www.instagram.com/ahsansenterprises/", img: ins_2 },
  { id: 3, link: "https://www.instagram.com/ahsansenterprises/", img: ins_3 },
  { id: 4, link: "https://www.instagram.com/ahsansenterprises/", img: ins_4 },
  { id: 5, link: "https://www.instagram.com/ahsansenterprises/", img: ins_5 },
];

const InstagramArea = () => {
  return (
    <div className="tp-instagram-area pb-70">
      <div className="container">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {instagram_data.map((item) => (
            <div key={item.id} className="col">
              <div className="tp-instagram-item p-relative z-index-1 fix mb-30 w-img">
                <Image
                  src={item.img}
                  alt="instagram img"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="tp-instagram-icon">
                  <a href={item.link} target="_blank" className="popup-image">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramArea;
