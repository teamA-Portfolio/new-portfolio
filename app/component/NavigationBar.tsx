import React, { useEffect } from "react";
import styles from "@/app/styles/component/navigationBar.module.scss";
import Image from "next/image";
import { ScrollTopProps } from "../page";

interface NavigationListType {
  icon: string;
  label: string;
}

function NavigationList({ icon, label }: NavigationListType) {
  return (
    <div className={styles.navigationList}>
      <figure>
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

function NavigationBar({scrollTop}:ScrollTopProps) {
  useEffect(()=> {
    console.log("abc")
  },[])
  return (
    <div className={`${styles.navigationSection} ${!scrollTop && styles.scrollDrag}`}>
      {["profile", "skills", "project"].map((tabs, idx) => {
        return <NavigationList key={idx} icon={tabs} label={tabs} />;
      })}
    </div>
  );
}

export default NavigationBar;
