"use client";

import { useEffect, useState } from "react";
import { BorderBox } from "./common/Box";

export default function ScrollToTopBtn() {
  const [scrollTop, setScrollTop] = useState<boolean>(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 0) {
        setScrollTop(false);
      } else if (scrollY === 0) {
        setScrollTop(true);
      }
    });
  }, []);

  return (
    <button className={scrollTop ? "scrollTop" : ""}>
      <BorderBox boxStyle="circle" onClick={scrollToTop}>
        <img src="/images/scrollToTopArrow.png" alt="scrollToTopButton" />
      </BorderBox>
    </button>
  );
}
