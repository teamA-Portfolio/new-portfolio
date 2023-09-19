import React, { useEffect } from "react";
import styles from "@/app/styles/component/navigationBar.module.scss";
import Image from "next/image";
import { sectionTagProps } from "../page";

interface NavigationListType {
  icon: string;
  label: string;
  key: number;
  myKey:number;
}

function NavigationList({ icon, label, myKey }: NavigationListType) {
  const moveSection = (myKey: number) => {
    console.log(myKey)
  }
  return (
    <div className={styles.navigationList}>
      <figure onClick={()=>moveSection(myKey)}>
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

function NavigationBar({sectionTag}:sectionTagProps) {
  useEffect(()=> {
    console.log(sectionTag, "useEffect")
  },[])
  console.log(sectionTag,"야외")
  return (
    <div className={styles.navigationSection}>
      {["profile", "skills", "project"].map((tabs, idx) => {
        return <NavigationList key={idx} myKey={idx} icon={tabs} label={tabs} />;
      })}
    </div>
  );
}

export default NavigationBar;
