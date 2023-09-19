"use client";

import Profile from "./component/main/Profile";
import ScrollToTopBtn from "./component/ScrollToTopBtn";
import NavigationBar from "./component/NavigationBar";
import Projects from "./component/main/Projects";
import Skills from "./component/main/Skills";
import Intro from "./component/main/Intro";
import { useEffect, useRef, useState } from "react";
import AppStyler from "./component/AppStyler";

export interface ScrollTopProps {
  scrollTop: boolean;
}

export default function Home() {
  const [scrollTop, setScrollTop] = useState<boolean>(true);

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
    <main>
      <NavigationBar scrollTop={scrollTop} />
      <div>
        <Intro scrollTop={scrollTop} />
        <Profile />
        <Skills />
        <Projects />
      </div>
      <AppStyler scrollTop={scrollTop}/>
      <ScrollToTopBtn scrollTop={scrollTop} />
    </main>
  );
}
