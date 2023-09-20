import React, { useEffect, useState } from "react";
import styles from "@/app/styles/component/navigationBar.module.scss";
import Image from "next/image";
import { ScrollTopProps } from "../page";

interface NavigationListType {
  icon: string;
  label: string;
  key: number;
  myKey: number;
  sectionTag: NodeListOf<HTMLElement> | null;
}

function NavigationList({
  icon,
  label,
  myKey,
  sectionTag,
}: NavigationListType) {
  const moveSection = (myKey: number) => {
    //200 = 각 섹션의 flex gap 값
    sectionTag !== null &&
      window.scrollTo({
        top: sectionTag[myKey + 1].offsetTop - 200,
        behavior: "smooth",
      });
  };
  return (
    <div className={styles.navigationList}>
      <figure onClick={() => moveSection(myKey)}>
        <Image
          src={`/images/navigationBar/${icon}.png`}
          width={50}
          height={50}
          alt={icon}
        />
        <figcaption>
          <p>{label}</p>
        </figcaption>
      </figure>
    </div>
  );
}

<<<<<<< HEAD
function NavigationBar({ scrollTop, sectionTag }: sectionTagProps) {
  useEffect(() => {
    console.log("abc");
  }, []);
=======
function NavigationBar({scrollTop}:ScrollTopProps) {
  const [sectionTag, setSectionTag] = useState<NodeListOf<HTMLElement> | null>(null)
  useEffect(()=> {
    const sectionList = document.querySelectorAll("section");
    setSectionTag(sectionList);
  },[])
>>>>>>> 3f8ea9d48391d5c3c65db1b7ee5648203cf26fbc
  return (
    <div
      className={`${styles.navigationSection} ${
        !scrollTop && styles.scrollDrag
      }`}
    >
      {["profile", "skills", "project"].map((tabs, idx) => {
        return (
          <NavigationList
            key={idx}
            myKey={idx}
            icon={tabs}
            label={tabs}
            sectionTag={sectionTag}
          />
        );
      })}
    </div>
  );
}

export default NavigationBar;
