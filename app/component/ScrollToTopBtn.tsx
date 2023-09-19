import { BorderBox } from "./common/Box";
import { ScrollTopProps } from "../page";

export default function ScrollToTopBtn({ scrollTop }: ScrollTopProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={scrollTop ? "scrollTop" : ""}>
      <BorderBox boxStyle="circle" onClick={scrollToTop}>
        <img src="/images/scrollToTopArrow.png" alt="scrollToTopButton" />
      </BorderBox>
    </button>
  );
}
