import React from "react";

export default ({ children, ...params }) => (
  <div className="swiper-slide" {...params}>
    <span>{children}</span>
  </div>
);
