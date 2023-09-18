import React from 'react'
import styles from "../styles/navigationBar/navigationBar.module.scss"
import Image from 'next/image';
interface NavigationListType {
  icon: any;
  label: string;
}

function NavigationList ({icon, label}: NavigationListType) {
  return (
    <div className={styles.navigationList}>
      <figure>
        <Image 
          src={`/images/navigationBar/${icon}.png`} 
          className={label}
          width={64}
          height={64}
          alt="이미지"
        />
        <figcaption>
          <p>{label}</p>
        </figcaption>
      </figure>
    </div>
  )
}

function NavigationBar() {
  return (
    <div>
      <div className={styles.navigationSection}>
      {
        ["profile","skills","project"].map((tab) => {
          return <>
            <NavigationList icon={tab} label={tab}/>
          </>
        })
      }
      </div>
    </div>
  );
}

export default NavigationBar;