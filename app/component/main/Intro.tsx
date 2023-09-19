import { ScrollTopProps } from "@/app/page";
import styles from "@/app/styles/main/intro.module.scss";

export default function Intro({ scrollTop }: ScrollTopProps) {
  return (
    <section
      className={`${styles.intro} ${!scrollTop && styles.scrollDrag}`}
      //   style={
      //     scrollTop
      //       ? {
      //           position: "fixed",
      //           top: 0,
      //           left: 0,
      //           width: "100vw",
      //           transition: "2s",
      //         }
      //       : { position: "relative", width: "100%", transition: "2s" }
      //   }
    >
      최초진입 인트로
    </section>
  );
}
