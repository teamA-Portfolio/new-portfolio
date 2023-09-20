"use client";

import Profile from "./component/main/Profile";
import ScrollToTopBtn from "./component/ScrollToTopBtn";
import NavigationBar from "./component/NavigationBar";
import Projects from "./component/main/Projects";
import Skills from "./component/main/Skills";
import Intro from "./component/main/Intro";
import { useEffect, useState } from "react";
import AppStyler from "./component/AppStyler";

export interface ScrollTopProps {
  scrollTop: boolean;
}
export default function Home() {
  const [scrollTop, setScrollTop] = useState<boolean>(true);
  const [sectionTag, setSectionTag] = useState<NodeListOf<HTMLElement> | null>(
    null
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 0) {
        setScrollTop(false);
      } else if (scrollY === 0) {
        setScrollTop(true);
      }
    });
    const abc = document.querySelectorAll("section");
    setSectionTag(abc);

    const handleBeforeUnload = () => {
      // 페이지가 새로고침될 때 화면을 맨 위로 스크롤
      window.scrollTo(0, 0);
    };

    // beforeunload 이벤트에 핸들러를 추가
    window.addEventListener("beforeunload", handleBeforeUnload);

    // 컴포넌트 언마운트 시에 이벤트 핸들러 제거
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <main>
      <NavigationBar scrollTop={scrollTop} />
      <div>
        <Intro scrollTop={scrollTop} />
        <Profile />
        <Skills />
        <Projects />
      </div>
      <AppStyler scrollTop={scrollTop} />
      <ScrollToTopBtn scrollTop={scrollTop} />
    </main>
  );
}
