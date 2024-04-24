import React from "react";
import Link from "next/link";

const ContactBreadcrumb = () => {
  return (
    <section className="breadcrumb__area blue-bg text-center pt-95 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">Keep In Touch with Us</h3>
              <div className="breadcrumb__list text-white-50">
                <span>
                  <Link href="/" legacyBehavior>
                    <a>Home</a>
                  </Link>
                </span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrumb;
